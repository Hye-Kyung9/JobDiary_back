import express from "express";
import account from "./account.js";
import worknet from "./worknet.js";
import board from "./board.js";

const router = express.Router();

router.use("/login_success", (req, res) => {
  res.json({
    ok: true,
    username: req.user.username,
  });
});

router.use("/login_fail", (req, res) => {
  res.json({
    ok: false,
    error: "로그인실패",
  });
});

router.use("/account", account);
router.use("/openapi", worknet); // worknet openapi 추가
router.use("/board", board);

export default router;
