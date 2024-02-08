import { Router } from "express";
import { updateProfile, profile } from "../controllers/profile.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/profile", authRequired, profile);

router.put("/profile:id", authRequired, updateProfile);

export default router;