import express from "express";
import { signup } from "../controllers/signUpController.js";
import { login } from "../controllers/loginController.js";
import { logout } from "../controllers/logoutController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;