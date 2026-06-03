import multer from "multer";
import path from "path";
import fs from "fs";

const tempDir = "./temp";

// Create temp directory if it doesn't exist
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

// Storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    }
});

// File filter to validate mimetypes
const fileFilter = (req, file, cb) => {
    if (file.fieldname === "pdf") {
        if (file.mimetype === "application/pdf") {
            cb(null, true);
        } else {
            cb(new Error("Only PDF files are allowed for notes!"), false);
        }
    } else if (file.fieldname === "thumbnail") {
        const allowedImageTypes = /jpeg|jpg|png|webp/;
        const extname = allowedImageTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedImageTypes.test(file.mimetype);
        if (mimetype && extname) {
            cb(null, true);
        } else {
            cb(new Error("Only images (jpeg, jpg, png, webp) are allowed for the thumbnail!"), false);
        }
    } else {
        cb(new Error("Unexpected file field"), false);
    }
};

// Multer upload middleware
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 20 * 1024 * 1024 // 20MB limit
    },
    fileFilter: fileFilter
});

export default upload;
