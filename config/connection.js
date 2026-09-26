const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    // Establish connection using Mongoose
    await mongoose.connect(uri);
    console.log("Connected successfully to MongoDB Atlas!");
  } catch (error) {
    // Handle connection errors gracefully
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
