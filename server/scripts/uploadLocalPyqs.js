import fs from "fs";
import path from "path";

// Mapping helper for branches
const branchMapping = {
    "cse": "cs",
    "cs": "cs",
    "aiml": "aiml",
    "it": "it",
    "ece": "ec",
    "ece": "ec",
    "ee": "ee",
    "me": "me",
    "ce": "ce"
};

// Mapping helper for specific subject names/codes to database subject IDs
const mapSubjectFolderToId = (folderName) => {
    // Split by spaces or hyphens, e.g. "AI-601 TOC" -> code: "ai601", name: "toc"
    const parts = folderName.split(/\s+/);
    const codePart = parts[0].toLowerCase().replace(/[^a-z0-9]/g, ""); // e.g. "ai601"
    const namePart = parts.slice(1).join(" ").toLowerCase().trim().replace(/[^a-z0-9]/g, ""); // e.g. "toc"
    
    const mappings = {
        "toc": "toc",
        "theoryofcomputation": "toc",
        "ai601": "toc",
        "al601": "toc",
        "cs601": "toc",
        "ml": "ml",
        "machinelearning": "ml",
        "se": "se",
        "softwareengineering": "se",
        "dbms": "dbms",
        "databasemanagementsystem": "dbms"
    };

    return mappings[namePart] || mappings[codePart] || codePart || namePart || "general";
};

// Detect semester from subject folder name (e.g. "AI-601" -> 6th Sem, "CS-302" -> 3rd Sem)
const detectSemester = (folderName) => {
    // Match any 3-digit subject code (e.g. 601, 302, 503)
    const codeMatch = folderName.match(/\b\d{3}\b/);
    if (codeMatch) {
        const firstDigit = parseInt(codeMatch[0].charAt(0), 10);
        if (firstDigit >= 1 && firstDigit <= 8) {
            return firstDigit;
        }
    }
    // Fallback search anywhere in string
    const digitMatch = folderName.match(/\b\d\b/);
    return digitMatch ? parseInt(digitMatch[0], 10) : 6; // default to 6
};

// Parse Year and Exam Type from file name
const parseFileInfo = (filename) => {
    const nameWithoutExt = path.parse(filename).name;
    
    // Extract Year (4-digit number between 2020 and 2026)
    const yearMatch = nameWithoutExt.match(/\b(202\d)\b/);
    const year = yearMatch ? parseInt(yearMatch[1], 10) : new Date().getFullYear();

    // Extract Exam Type (Regular vs Ex/Backlog)
    let examType = "Regular";
    if (nameWithoutExt.toLowerCase().includes("ex") || nameWithoutExt.toLowerCase().includes("backlog")) {
        examType = "Ex";
    }

    return { year, examType };
};

// Main processing function
const uploadFolder = async (rootPath) => {
    console.log(`\n🚀 Starting RGPV PYQ bulk upload scanner in: ${rootPath}\n`);

    if (!fs.existsSync(rootPath)) {
        console.error(`❌ Error: Root path "${rootPath}" does not exist!`);
        process.exit(1);
    }

    const pdfFiles = [];

    // Step 1: Scan branch folders at root level (e.g. AIML, CSE)
    const branchFolders = fs.readdirSync(rootPath);

    for (const branchFolder of branchFolders) {
        const branchPath = path.join(rootPath, branchFolder);
        if (!fs.statSync(branchPath).isDirectory()) continue;

        const branchKey = branchFolder.toLowerCase();
        const branchId = branchMapping[branchKey] || branchKey;

        // Step 2: Scan subject folders inside branch folder (e.g. AI-601 TOC)
        const subjectFolders = fs.readdirSync(branchPath);

        for (const subjectFolder of subjectFolders) {
            const subjectPath = path.join(branchPath, subjectFolder);
            if (!fs.statSync(subjectPath).isDirectory()) continue;

            const semester = detectSemester(subjectFolder);
            const subjectId = mapSubjectFolderToId(subjectFolder);

            // Step 3: Scan PDF papers inside the subject folder
            const files = fs.readdirSync(subjectPath);

            for (const file of files) {
                const filePath = path.join(subjectPath, file);
                if (fs.statSync(filePath).isFile() && path.extname(file).toLowerCase() === ".pdf") {
                    const fileInfo = parseFileInfo(file);
                    pdfFiles.push({
                        filePath,
                        filename: file,
                        branch: branchId,
                        semester,
                        subjectId,
                        subjectName: subjectFolder,
                        ...fileInfo
                    });
                }
            }
        }
    }

    console.log(`📋 Found ${pdfFiles.length} PDF papers to upload.\n`);

    // Step 4: Upload each PDF to the API
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < pdfFiles.length; i++) {
        const file = pdfFiles[i];

        console.log(`[${i + 1}/${pdfFiles.length}] Uploading ${file.filename}...`);
        console.log(`   └─ Branch: ${file.branch} | Sem: ${file.semester} | Subject: ${file.subjectName} (ID: ${file.subjectId}) | Year: ${file.year} (${file.examType})`);

        try {
            const formData = new FormData();
            formData.append("subject", file.subjectId);
            formData.append("semester", String(file.semester));
            formData.append("branch", file.branch);
            formData.append("year", String(file.year));
            formData.append("examType", file.examType);
            formData.append("uploadedBy", "Bulk Uploader");
            
            // Read PDF file as a Blob
            const fileBuffer = fs.readFileSync(file.filePath);
            const pdfBlob = new Blob([fileBuffer], { type: "application/pdf" });
            formData.append("pdf", pdfBlob, file.filename);

            const response = await fetch("http://localhost:3000/api/pyqs/upload", {
                method: "POST",
                body: formData
            });

            const resData = await response.json();

            if (response.ok && resData.success) {
                console.log(`   ✅ Success: Stored in database! URL: ${resData.data.pdfUrl}\n`);
                successCount++;
            } else {
                console.error(`   ❌ Failed: ${resData.message || "Unknown error"}\n`);
                failCount++;
            }
        } catch (error) {
            console.error(`   ❌ Connection Error: Could not connect to backend. Make sure your server is running on port 3000.\n`, error.message);
            failCount++;
        }
    }

    console.log(`\n🎉 Bulk upload finished!`);
    console.log(`   👉 Successfully Uploaded: ${successCount}`);
    console.log(`   👉 Failed: ${failCount}`);
};

// Retrieve argument path
const targetFolder = process.argv[2];
if (!targetFolder) {
    console.error("❌ Error: Please specify the path to your main branch directory.");
    console.log('Usage: node server/scripts/uploadLocalPyqs.js "D:/STUDYBUDDY"');
    process.exit(1);
}

uploadFolder(path.resolve(targetFolder));
