import express from "express";
import { worknet } from "../controller/worknet.js";

const router = express.Router();

router.get("/worknet", worknet);

export default router;
