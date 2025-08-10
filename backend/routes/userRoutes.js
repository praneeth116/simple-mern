import Router from "express";
import {authUser, getUserProfile, updateUserProfile, logoutUser, registerUser} from "../controller/userController.js";

const router = Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;