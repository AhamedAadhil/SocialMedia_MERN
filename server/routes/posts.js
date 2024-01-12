import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  addComment,
  createEvent,
  sharePost,
  savePost,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* WRITE */
router.post("/:id/shared", verifyToken, sharePost);
router.post("/event", verifyToken, createEvent);
router.post("/:id/saved", verifyToken, savePost);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/comment", verifyToken, addComment);

export default router;
