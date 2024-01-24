import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { searchUpload } from "../controllers/upload.controller.js";

const router = Router();

router.get("/explorer", searchUpload);

export default router
