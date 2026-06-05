import express from "express";
import {
    uploadNote,
    getAllNotes,
    getSingleNote,
    searchNotes,
    filterNotes,
    downloadNote,
    deleteNote
} from "../controllers/noteController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

/**
 * @route   POST /api/notes/upload
 * @desc    Upload note metadata with external PDF and optional thumbnail URLs
 * @access  Public
 */
router.post(
    "/upload",
    upload.fields([
        { name: "pdf", maxCount: 1 },
        { name: "thumbnail", maxCount: 1 }
    ]),
    uploadNote
);

/**
 * @route   GET /api/notes
 * @desc    Get all notes (paginated)
 * @access  Public
 */
router.get("/", getAllNotes);

/**
 * @route   GET /api/notes/search
 * @desc    Search notes by title, subject, or branch
 * @access  Public
 */
router.get("/search", searchNotes);

/**
 * @route   GET /api/notes/filter
 * @desc    Filter notes by semester, subject, branch, or university
 * @access  Public
 */
router.get("/filter", filterNotes);

/**
 * @route   GET /api/notes/:id
 * @desc    Get details of a single note (increments views)
 * @access  Public
 */
router.get("/:id", getSingleNote);

/**
 * @route   GET /api/notes/:id/download
 * @desc    Register a note download and retrieve the PDF URL
 * @access  Public
 */
router.get("/:id/download", downloadNote);

/**
 * @route   DELETE /api/notes/:id
 * @desc    Delete a note and its assets on Cloudinary
 * @access  Public
 */
router.delete("/:id", deleteNote);

export default router;
