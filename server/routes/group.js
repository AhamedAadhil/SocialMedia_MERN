import express from "express";
import { getGroups } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* GET */
router.get("/getAll", getGroups);

export default router;
