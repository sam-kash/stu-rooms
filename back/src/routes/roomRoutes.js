import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getRooms } from "../controllers/roomController.js";

const router = express.Router();

router.get("/", authMiddleware, getRooms);

export default router;
