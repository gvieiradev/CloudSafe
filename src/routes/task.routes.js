import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createTask, getTask, getTasks, updateTasks, deleteTasks } from "../controllers/task.controller.js";

const router = Router();

router.get("/task", authRequired, getTasks);

router.post("/task", authRequired, createTask);

router.delete("/task:id", authRequired, deleteTasks);

router.get("/task:id", authRequired, getTask);

router.put("/task:id", authRequired, updateTasks);

export default router