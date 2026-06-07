import "dotenv/config";
import mongoose from "mongoose";
import PYQ from "./models/PYQ.js";

const seedPyqs = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✓ Database connected successfully\n");

        // Clear existing PYQs
        await PYQ.deleteMany({});
        console.log("✓ Cleared existing PYQs\n");

        // Sample PYQ data matching different subjects and semesters
        const samplePyqs = [
            // Computer Graphics (CS-602, Sem 6)
            {
                subject: "Computer Graphics",
                semester: 6,
                branch: "CSE",
                year: 2024,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/cg_2024_regular",
                uploadedBy: "Admin",
                downloads: 0
            },
            {
                subject: "Computer Graphics",
                semester: 6,
                branch: "CSE",
                year: 2023,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/cg_2023_regular",
                uploadedBy: "Admin",
                downloads: 0
            },
            {
                subject: "Computer Graphics",
                semester: 6,
                branch: "CSE",
                year: 2024,
                examType: "Ex",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/cg_2024_ex",
                uploadedBy: "Admin",
                downloads: 0
            },

            // Data Structures (BT-101, Sem 1)
            {
                subject: "Data Structures",
                semester: 1,
                branch: "CSE",
                year: 2024,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/ds_2024_regular",
                uploadedBy: "Admin",
                downloads: 0
            },
            {
                subject: "Data Structures",
                semester: 1,
                branch: "CSE",
                year: 2023,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/ds_2023_regular",
                uploadedBy: "Admin",
                downloads: 0
            },

            // Database Management System (BT-205, Sem 3)
            {
                subject: "Database Management System",
                semester: 3,
                branch: "CSE",
                year: 2024,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/dbms_2024_regular",
                uploadedBy: "Admin",
                downloads: 0
            },
            {
                subject: "Database Management System",
                semester: 3,
                branch: "CSE",
                year: 2023,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/dbms_2023_regular",
                uploadedBy: "Admin",
                downloads: 0
            },

            // Software Engineering (BT-304, Sem 4)
            {
                subject: "Software Engineering",
                semester: 4,
                branch: "CSE",
                year: 2024,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/se_2024_regular",
                uploadedBy: "Admin",
                downloads: 0
            },

            // Operating Systems (BT-305, Sem 5)
            {
                subject: "Operating Systems",
                semester: 5,
                branch: "CSE",
                year: 2024,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/os_2024_regular",
                uploadedBy: "Admin",
                downloads: 0
            },
            {
                subject: "Operating Systems",
                semester: 5,
                branch: "CSE",
                year: 2023,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/os_2023_regular",
                uploadedBy: "Admin",
                downloads: 0
            },

            // Computer Networks (BT-306, Sem 5)
            {
                subject: "Computer Networks",
                semester: 5,
                branch: "CSE",
                year: 2024,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/cn_2024_regular",
                uploadedBy: "Admin",
                downloads: 0
            },

            // Machine Learning (AI-ML-401, Sem 4)
            {
                subject: "Machine Learning",
                semester: 4,
                branch: "AIML",
                year: 2024,
                examType: "Regular",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                pdfPublicId: "studybuddy/pyqs/ml_2024_regular",
                uploadedBy: "Admin",
                downloads: 0
            },
        ];

        // Insert all sample PYQs
        const insertedPyqs = await PYQ.insertMany(samplePyqs);
        console.log(`✓ Successfully seeded ${insertedPyqs.length} PYQs into the database!\n`);

        // Display sample documents
        console.log("Sample PYQs inserted:");
        insertedPyqs.slice(0, 3).forEach((pyq, index) => {
            console.log(`  ${index + 1}. ${pyq.subject} (Sem ${pyq.semester}, ${pyq.year} ${pyq.examType})`);
        });
        console.log(`  ... and ${insertedPyqs.length - 3} more\n`);

        process.exit(0);
    } catch (error) {
        console.error("❌ Error seeding data:", error.message);
        process.exit(1);
    }
};

seedPyqs();
