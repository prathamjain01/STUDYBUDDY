import "dotenv/config";
import mongoose from "mongoose";
import PYQ from "./models/PYQ.js";

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");

        const newPyq = new PYQ({
            subject: "ml-aiml",
            semester: 4,
            branch: "aiml",
            year: 2024,
            examType: "Regular",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            pdfPublicId: "dummy_public_id",
            downloads: 42,
            uploadedBy: "Admin"
        });

        await newPyq.save();
        console.log("Successfully seeded a Previous Year Question Paper (PYQ) into the database!");
        
        process.exit(0);
    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
};

seedData();
