import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectdb } from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import noteRouter from "./routes/noteRoutes.js";
import pyqRouter from "./routes/pyqRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
connectdb();

// Routes
app.use("/api/user", userRouter);
app.use("/api/notes", noteRouter);
app.use("/api/pyqs", pyqRouter);

// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error("Centralized Error Handler:", err.stack || err.message || err);
    
    // Handle Multer specific errors
    if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
            success: false,
            message: "File size exceeds limit (max 20MB)"
        });
    }

    const statusCode = err.status || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});