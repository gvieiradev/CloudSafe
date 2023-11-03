import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createImage, saveImage} from "../controllers/upload.controller.js";
import {validateSchema} from "../middlewares/validator.middlewares.js";
import { createImageSchema } from "../schemas/task.schemas.js";

const router = Router();

router.post("/uploader", authRequired, createImage, saveImage);

// router.get("/task", authRequired, getTasks);

// router.post("/task", authRequired, validateSchema(createTaskSchema), createTask);

// router.delete("/task:id", authRequired, deleteTasks);

// router.get("/task:id", authRequired, getTask);

// router.put("/task:id", authRequired, updateTasks);

export default router