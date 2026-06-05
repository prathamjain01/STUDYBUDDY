import Note from "../models/Note.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

/**
 * Upload a Note by saving its external PDF link and optional thumbnail link to MongoDB
 */
export const uploadNote = async (req, res, next) => {
    try {
        const { title, subject, semester, branch, uploadedBy } = req.body;
        const description = req.body.description || "Study material uploaded by community member.";
        const university = req.body.university || "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)";

        // Check required fields (metadata)
        if (!title || !subject || !semester || !branch) {
            // Clean up any uploaded files if validation fails
            if (req.files) {
                if (req.files.pdf) fs.unlinkSync(req.files.pdf[0].path);
                if (req.files.thumbnail) fs.unlinkSync(req.files.thumbnail[0].path);
            }
            return res.status(400).json({
                success: false,
                message: "All text fields are required (title, subject, semester, branch)"
            });
        }

        // Check if PDF file was uploaded
        if (!req.files || !req.files.pdf) {
            if (req.files && req.files.thumbnail) fs.unlinkSync(req.files.thumbnail[0].path);
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF file for the note!"
            });
        }

        const pdfFile = req.files.pdf[0];
        let pdfUrl = "";
        let pdfPublicId = "";
        let thumbnailUrl = "";
        let thumbnailPublicId = "";

        // Upload PDF to Cloudinary
        try {
            const pdfUploadResult = await cloudinary.uploader.upload(pdfFile.path, {
                resource_type: "auto",
                folder: "studybuddy/pdfs"
            });
            pdfUrl = pdfUploadResult.secure_url;
            pdfPublicId = pdfUploadResult.public_id;
        } finally {
            // Ensure temp file is deleted even if upload fails
            try {
                if (fs.existsSync(pdfFile.path)) {
                    fs.unlinkSync(pdfFile.path);
                }
            } catch (err) {
                console.error("Failed to delete temp PDF file:", err);
            }
        }

        // Upload thumbnail if provided
        if (req.files.thumbnail) {
            const thumbnailFile = req.files.thumbnail[0];
            try {
                const thumbnailUploadResult = await cloudinary.uploader.upload(thumbnailFile.path, {
                    resource_type: "image",
                    folder: "studybuddy/thumbnails"
                });
                thumbnailUrl = thumbnailUploadResult.secure_url;
                thumbnailPublicId = thumbnailUploadResult.public_id;
            } finally {
                // Ensure temp file is deleted even if upload fails
                try {
                    if (fs.existsSync(thumbnailFile.path)) {
                        fs.unlinkSync(thumbnailFile.path);
                    }
                } catch (err) {
                    console.error("Failed to delete temp thumbnail file:", err);
                }
            }
        }

        // Save Note metadata to MongoDB
        const newNote = await Note.create({
            title,
            description,
            subject,
            semester: Number(semester),
            branch,
            university,
            pdfUrl,
            pdfPublicId,
            thumbnailUrl,
            thumbnailPublicId,
            uploadedBy: uploadedBy || "Admin"
        });

        res.status(201).json({
            success: true,
            message: "Note uploaded successfully",
            data: newNote
        });
    } catch (error) {
        // Clean up temp files if anything crashes before they are unlinked
        if (req.files) {
            try {
                if (req.files.pdf && fs.existsSync(req.files.pdf[0].path)) {
                    fs.unlinkSync(req.files.pdf[0].path);
                }
                if (req.files.thumbnail && fs.existsSync(req.files.thumbnail[0].path)) {
                    fs.unlinkSync(req.files.thumbnail[0].path);
                }
            } catch (err) {
                console.error("Clean up error on catch block:", err);
            }
        }
        next(error);
    }
};

/**
 * Retrieve all notes with pagination and sorting (newest first)
 */
export const getAllNotes = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalNotes = await Note.countDocuments();
        const notes = await Note.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            success: true,
            message: "Notes retrieved successfully",
            data: {
                notes,
                pagination: {
                    totalNotes,
                    page,
                    limit,
                    totalPages: Math.ceil(totalNotes / limit)
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Retrieve a single note by ID and increment its view count
 */
export const getSingleNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const note = await Note.findByIdAndUpdate(
            id,
            { $inc: { views: 1 } },
            { new: true }
        );

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Note retrieved successfully",
            data: note
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Search notes by title, subject, or branch using regex
 */
export const searchNotes = async (req, res, next) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({
                success: false,
                message: "Search query is required"
            });
        }

        const searchRegex = new RegExp(query, "i");
        const notes = await Note.find({
            $or: [
                { title: searchRegex },
                { subject: searchRegex },
                { branch: searchRegex }
            ]
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Search results retrieved successfully",
            data: notes
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Filter notes by semester, subject, branch, or university
 */
export const filterNotes = async (req, res, next) => {
    try {
        const { semester, subject, branch, university } = req.query;
        const filter = {};

        if (semester) filter.semester = Number(semester);
        if (subject) filter.subject = { $regex: new RegExp(subject, "i") };
        if (branch) filter.branch = { $regex: new RegExp(branch, "i") };
        if (university) filter.university = { $regex: new RegExp(university, "i") };

        const notes = await Note.find(filter).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Filtered notes retrieved successfully",
            data: notes
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Increment the download count of a note and return the Cloudinary PDF URL
 */
export const downloadNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const note = await Note.findByIdAndUpdate(
            id,
            { $inc: { downloads: 1 } },
            { new: true }
        );

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Note download registered",
            data: {
                pdfUrl: note.pdfUrl,
                downloads: note.downloads
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Delete a note by ID and delete associated assets from Cloudinary
 */
export const deleteNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        // Delete from Cloudinary
        if (note.pdfPublicId) {
            await cloudinary.uploader.destroy(note.pdfPublicId);
        }
        if (note.thumbnailPublicId) {
            await cloudinary.uploader.destroy(note.thumbnailPublicId);
        }

        // Delete from MongoDB
        await Note.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Note deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};
