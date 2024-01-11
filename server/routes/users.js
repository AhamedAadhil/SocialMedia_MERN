import express from "express";
import {
  deleteProfile,
  getUser,
  // getUserFriends,
  // addRemoveFriend,
  updateProfile,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
// router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
// router.patch("/:id/:friendId", verifyToken, addRemoveFriend);
// router.put("/:id/update-profile", verifyToken, updateProfile);

//DELETE
router.delete(":id/delete", verifyToken, deleteProfile);

export default router;
