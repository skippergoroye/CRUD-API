import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"
dotenv.config()



export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error)
    }
}