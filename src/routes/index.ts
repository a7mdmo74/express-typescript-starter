import express from "express";
import healthRoute from "@/routes/health";

const router = express.Router();

router.use(healthRoute);

export default router;
