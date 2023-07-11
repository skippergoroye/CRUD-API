import express, { urlencoded } from 'express'
import { connectDB } from './config/db'
import cors from 'cors'
import morgan from 'morgan'
import foodRoute from './routes/foodRoute'
import dotenv from "dotenv"
dotenv.config()



const app = express()
const PORT = process.env.PORT || 6000

connectDB()



app.use(cors())
app.use(morgan('dev'))


app.use(express.json())
app.use(urlencoded({ extended: true}))



app.get("/", (req, res) => {
    res.send("Appi is running")
})

app.use('/food', foodRoute)


app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})