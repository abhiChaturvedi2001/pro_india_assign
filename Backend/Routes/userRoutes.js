import express from "express";
import { registerUser, loginUser, logout, getUser } from "../Controller/authController.js";
import { isAuth } from "../Middleware/isAuthenticated.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout)
router.get("/getUser", isAuth, getUser)

export default router



