import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const dbConnect = () => {
  try {
    mongoose.connect("mongodb+srv://rashmiraj2626:1DRHpBU44AUN8dxJ@social.jptho6r.mongodb.net/?retryWrites=true&w=majority&appName=social");
    console.log("Database has been connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
