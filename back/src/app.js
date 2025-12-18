import express from "express"
import cors from "cors"
import roomRoutes from "./routes/roomRoutes"

const app = express();

app.use(express.json())
app.use(cors())

app.get("/health", (req, res) => {
    res.json({status : "Backend running"})
})

app.use("/rooms", roomRoutes)

export default app