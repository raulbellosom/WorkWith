import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.routes.js";
import taskRouter from "./routes/task.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.use(indexRouter);
app.use("/api/tasks", taskRouter);

app.use(express.static(join(__dirname, "../client/dist")));

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
  });
});

export default app;
