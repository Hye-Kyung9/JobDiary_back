import express from "express";
import {
  Register,
  postLogin,
  logout,
  loginCheck,
} from "../controller/account.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", postLogin);
router.get("/logout", logout);
router.get("/loginCheck", loginCheck);

export default router;
