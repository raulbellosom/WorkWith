import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTasks,
  deleteTasks,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/", getTasks);

router.get("/:id", getTask);

router.post("/", createTask);

router.put("/:id", updateTasks);

router.delete("/:id", deleteTasks);

export default router;
