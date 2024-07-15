import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const dbConnect = () => {
  try {
    mongoose.connect("your_mongodb_url");
    console.log("Database has been connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
