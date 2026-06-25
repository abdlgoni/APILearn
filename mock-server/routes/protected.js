import { Router } from "express";
import { authCheck } from "../middleware/authCheck.js";
import { profile } from "../data/mockData.js";

const router = Router();

router.get("/api/profile", authCheck, (req, res) => {
  res.json({
    success: true,
    data: profile,
  });
});

export default router;
