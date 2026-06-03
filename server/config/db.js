import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        let res = await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error.message);
    }
}