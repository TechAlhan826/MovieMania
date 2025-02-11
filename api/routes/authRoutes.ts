import { Router } from "express";
import { signUp, signIn, logOut } from "../controllers/authController";

const router = Router();

router.post("/register", signUp);
router.post("/login", signIn);
router.get("/logout", logOut);

export default router;
