import express from "express";
import { uploadPYQ, getAllPYQs } from "../controllers/pyqController.js";
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
 * @desc    Get all PYQ papers
 * @access  Public
 */
router.get("/", getAllPYQs);

export default router;
