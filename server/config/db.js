import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/backend-class-2";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error in connecting to the database: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
