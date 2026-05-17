import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_MAIN = process.env.MONGO_MAIN;

export const mongoMainConn = async (): Promise<mongoose.Connection> => {
    try {
        if (!MONGO_MAIN) {
            throw new Error("MONGO_MAIN is not defined in environment variables");
        }

        const conn = mongoose.createConnection(MONGO_MAIN);

        return await new Promise((resolve, reject) => {
            conn.once("open", () => {
                console.log("✅ Connected to MongoDB [Main]");
                resolve(conn);
            });

            conn.on("error", (err) => {
                console.error("❌ MongoDB connection error:", err);
                reject(err);
            });
        });

    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
};