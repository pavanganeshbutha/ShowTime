import express from "express";
import { getServerHealthStatus } from "../contollers/health/getServerHealthStatus.js";

const router = express.Router();

router.get("/", getServerHealthStatus);

export default router;
