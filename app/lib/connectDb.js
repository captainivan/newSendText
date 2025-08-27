import mongoose from "mongoose";

const connectDB = async () => {
  try {
      await mongoose.connect(process.env.DB_URL);
      console.log("✅ DB connected successfully");
  } catch (error) {
    console.error("❌ DB not connected", error);
  }
};

export default connectDB;
