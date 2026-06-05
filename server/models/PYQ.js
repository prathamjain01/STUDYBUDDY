import mongoose from "mongoose";

const pyqSchema = new mongoose.Schema(
    {
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
        year: {
            type: Number,
            required: [true, "Exam Year is required"]
        },
        examType: {
            type: String,
            required: [true, "Exam Type is required"],
            enum: ["Regular", "Ex"],
            default: "Regular"
        },
        pdfUrl: {
            type: String,
            required: [true, "PDF URL is required"]
        },
        pdfPublicId: {
            type: String,
            default: ""
        },
        uploadedBy: {
            type: String,
            default: "Anonymous"
        },
        downloads: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const PYQ = mongoose.model("PYQ", pyqSchema);
export default PYQ;
