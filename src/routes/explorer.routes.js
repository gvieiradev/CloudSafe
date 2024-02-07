import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { searchUpload, removeCloudinary } from "../controllers/upload.controller.js";

const router = Router();

router.get("/explorer", searchUpload);
router.delete("/explorer/:id", removeCloudinary)

export default router
