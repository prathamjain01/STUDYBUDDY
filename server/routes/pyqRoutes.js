import express from "express";
import {
    uploadPYQ,
    getAllPYQs,
    searchPYQs,
    filterPYQs,
    getSinglePYQ,
    downloadPYQ,
    deletePYQ
} from "../controllers/pyqController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

/**
 * @route   POST /api/pyqs/upload
 * @desc    Upload PYQ PDF and metadata
 * @access  Public
 */
router.post(
    "/upload",
    upload.fields([
        { name: "pdf", maxCount: 1 }
    ]),
    uploadPYQ
);

/**
 * @route   GET /api/pyqs
 * @desc    Get all PYQ papers (paginated)
 * @access  Public
 */
router.get("/", getAllPYQs);

/**
 * @route   GET /api/pyqs/search
 * @desc    Search PYQ papers by subject or branch
 * @access  Public
 */
router.get("/search", searchPYQs);

/**
 * @route   GET /api/pyqs/filter
 * @desc    Filter PYQ papers by semester, subject, branch, year, or exam type
 * @access  Public
 */
router.get("/filter", filterPYQs);

/**
 * @route   GET /api/pyqs/:id
 * @desc    Get a single PYQ by ID
 * @access  Public
 */
router.get("/:id", getSinglePYQ);

/**
 * @route   GET /api/pyqs/:id/download
 * @desc    Register a PYQ download and retrieve the PDF URL
 * @access  Public
 */
router.get("/:id/download", downloadPYQ);

/**
 * @route   DELETE /api/pyqs/:id
 * @desc    Delete a PYQ and its PDF from Cloudinary
 * @access  Public
 */
router.delete("/:id", deletePYQ);

export default router;
