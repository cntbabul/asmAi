import express from "express";
import { generateImage } from "../controllers/GenerateAllImageController.js";

const router = express.Router();

router.post("/", generateImage);

export default router;