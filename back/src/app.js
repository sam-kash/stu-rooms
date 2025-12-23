import express from "express"
import cors from "cors"
import roomRoutes from "./routes/roomRoutes.js"
import authRoutes from "./routes/authRoutes.js"


const app = express();

app.use(express.json())
app.use(cors())

app.get("/health", (req, res) => {
    res.json({status : "Backend running"})
})

app.use("/rooms", roomRoutes)

app.use("/auth" , authRoutes)


export default app