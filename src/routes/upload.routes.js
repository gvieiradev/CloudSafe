import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { uploadImageF} from "../controllers/upload.controller.js";
import {validateSchema} from "../middlewares/validator.middlewares.js";

const router = Router();

router.post("/uploader", authRequired, uploadImageF);

// router.get("/task", authRequired, getTasks);

// router.post("/task", authRequired, validateSchema(createTaskSchema), createTask);

//router.delete("/uploader:id", authRequired, removeFromCloudinary);

// router.get("/task:id", authRequired, getTask);

// router.put("/task:id", authRequired, updateTasks);

export default router