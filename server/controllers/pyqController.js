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
        const pyqs = await PYQ.find().sort({ year: -1, createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "PYQ papers retrieved successfully",
            data: pyqs
        });
    } catch (error) {
        next(error);
    }
};
