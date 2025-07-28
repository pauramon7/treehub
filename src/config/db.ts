import mongoose from "mongoose"
import colors from "colors"
import 'dotenv/config'

export const connectDB = async () => {
    try {

        const {connection} = await mongoose.connect(process.env.MONGO_URI)

        const url = `${connection.host}:${connection.port}`
        
        console.log(colors.cyan.bold(`MongoDB Connected in ${url}`))
    } catch (error) {
        console.log(colors.bgRed.white.bold(`Error connecting to DB: ${error}`))
        process.exit(1)
    }
}