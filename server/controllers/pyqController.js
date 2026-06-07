import PYQ from "../models/PYQ.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

/**
 * Upload a PYQ by uploading its PDF to Cloudinary and saving metadata to MongoDB
 */
export const uploadPYQ = async (req, res, next) => {
    try {
        const { subject, semester, branch, year, examType, uploadedBy } = req.body;

        // Check required fields (metadata)
        if (!subject || !semester || !branch || !year || !examType) {
            // Clean up any uploaded files if validation fails
            if (req.files && req.files.pdf) {
                try {
                    if (fs.existsSync(req.files.pdf[0].path)) {
                        fs.unlinkSync(req.files.pdf[0].path);
                    }
                } catch (err) {
                    console.error("Failed to delete temp file:", err);
                }
            }
            return res.status(400).json({
                success: false,
                message: "All fields are required (subject, semester, branch, year, examType)"
            });
        }

        // Check if PDF file was uploaded
        if (!req.files || !req.files.pdf) {
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF file for the PYQ paper!"
            });
        }

        const pdfFile = req.files.pdf[0];
        let pdfUrl = "";
        let pdfPublicId = "";

        // Upload PDF to Cloudinary
        try {
            const pdfUploadResult = await cloudinary.uploader.upload(pdfFile.path, {
                resource_type: "auto",
                folder: "studybuddy/pyqs"
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

        // Save PYQ metadata to MongoDB
        const newPyq = await PYQ.create({
            subject,
            semester: Number(semester),
            branch,
            year: Number(year),
            examType,
            pdfUrl,
            pdfPublicId,
            uploadedBy: uploadedBy || "Anonymous"
        });

        res.status(201).json({
            success: true,
            message: "PYQ paper uploaded successfully",
            data: newPyq
        });
    } catch (error) {
        if (req.files && req.files.pdf) {
            try {
                if (fs.existsSync(req.files.pdf[0].path)) {
                    fs.unlinkSync(req.files.pdf[0].path);
                }
            } catch (err) {
                console.error("Clean up error on catch block:", err);
            }
        }
        next(error);
    }
};

/**
 * Retrieve all PYQ papers sorted by year and creation date
 */
export const getAllPYQs = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalPyqs = await PYQ.countDocuments();
        const pyqs = await PYQ.find()
            .sort({ year: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            success: true,
            message: "PYQ papers retrieved successfully",
            data: pyqs,
            pagination: {
                totalPyqs,
                page,
                limit,
                totalPages: Math.ceil(totalPyqs / limit)
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Search PYQ papers by subject, year, or exam type
 */
export const searchPYQs = async (req, res, next) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({
                success: false,
                message: "Search query is required"
            });
        }

        const searchRegex = new RegExp(query, "i");
        const pyqs = await PYQ.find({
            $or: [
                { subject: searchRegex },
                { branch: searchRegex }
            ]
        }).sort({ year: -1, createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Search results retrieved successfully",
            data: pyqs
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Filter PYQ papers by semester, subject, branch, or year
 */
export const filterPYQs = async (req, res, next) => {
    try {
        const { semester, subject, branch, year, examType } = req.query;
        const filter = {};

        if (semester) filter.semester = Number(semester);
        if (subject) filter.subject = { $regex: new RegExp(subject, "i") };
        if (branch) filter.branch = { $regex: new RegExp(branch, "i") };
        if (year) filter.year = Number(year);
        if (examType) filter.examType = examType;

        const pyqs = await PYQ.find(filter).sort({ year: -1, createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Filtered PYQ papers retrieved successfully",
            data: pyqs
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Retrieve a single PYQ by ID
 */
export const getSinglePYQ = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pyq = await PYQ.findById(id);

        if (!pyq) {
            return res.status(404).json({
                success: false,
                message: "PYQ not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "PYQ retrieved successfully",
            data: pyq
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Increment download count for a PYQ and return PDF URL
 */
export const downloadPYQ = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pyq = await PYQ.findByIdAndUpdate(
            id,
            { $inc: { downloads: 1 } },
            { new: true }
        );

        if (!pyq) {
            return res.status(404).json({
                success: false,
                message: "PYQ not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "PYQ download registered",
            data: {
                pdfUrl: pyq.pdfUrl,
                downloads: pyq.downloads
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Delete a PYQ by ID and delete associated PDF from Cloudinary
 */
export const deletePYQ = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pyq = await PYQ.findById(id);

        if (!pyq) {
            return res.status(404).json({
                success: false,
                message: "PYQ not found"
            });
        }

        // Delete from Cloudinary
        if (pyq.pdfPublicId) {
            await cloudinary.uploader.destroy(pyq.pdfPublicId);
        }

        // Delete from MongoDB
        await PYQ.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "PYQ deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};
