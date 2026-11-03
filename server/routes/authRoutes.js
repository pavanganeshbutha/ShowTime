import express from "express";
import register from "../contollers/auth/registration.js";
import login from "../contollers/auth/login.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
