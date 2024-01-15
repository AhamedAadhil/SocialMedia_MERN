import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  addComment,
  createEvent,
  sharePost,
  savePost,
  getEvents,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.get("/get-events", verifyToken, getEvents);

/* WRITE */
router.post("/:id/shared", verifyToken, sharePost);
router.post("/event", verifyToken, createEvent);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/comment", verifyToken, addComment);
router.patch("/:id/saved", verifyToken, savePost);

export default router;
