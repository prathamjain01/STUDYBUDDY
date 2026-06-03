import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
            trim: true
        },
        semester: {
            type: Number,
            required: [true, "Semester is required"]
        },
        branch: {
            type: String,
            required: [true, "Branch is required"],
            trim: true
        },
        university: {
            type: String,
            required: [true, "University is required"],
            trim: true
        },
        pdfUrl: {
            type: String,
            required: [true, "PDF URL is required"]
        },
        pdfPublicId: {
            type: String,
            default: ""
        },
        thumbnailUrl: {
            type: String,
            default: ""
        },
        thumbnailPublicId: {
            type: String,
            default: ""
        },
        uploadedBy: {
            type: String,
            default: "Admin"
        },
        downloads: {
            type: Number,
            default: 0
        },
        views: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
