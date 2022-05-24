import express from "express";
import { Register, Login, postLogin } from "../controller/account.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", postLogin);

export default router;
