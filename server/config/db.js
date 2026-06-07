import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        const options = {
            serverSelectionTimeoutMS: 15000,
            socketTimeoutMS: 90000,
            maxPoolSize: 15,
            minPoolSize: 5,
            retryWrites: true,
            w: 'majority',
            connectTimeoutMS: 15000,
            // Ensure we're not buffering operations
            bufferCommands: false,
        };

        await mongoose.connect(process.env.MONGO_URL, options);
        console.log("✓ Database connected successfully");

        // Handle connection events
        mongoose.connection.on('disconnected', () => {
            console.warn("⚠️ MongoDB disconnected - attempting to reconnect...");
        });

        mongoose.connection.on('error', (err) => {
            console.error("❌ MongoDB error:", err.message);
        });

        mongoose.connection.on('connected', () => {
            console.log("✓ MongoDB connection established");
        });

    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        console.error("Tip: Check MongoDB Atlas Network Access and ensure your IP is whitelisted");
        // Retry after 5 seconds
        setTimeout(connectdb, 5000);
    }
}