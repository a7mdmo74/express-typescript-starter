import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "@/routes";
import { notFoundHandler } from "@/middleware/notFoundHandler";
import { requestLogger } from "@/middleware/requestLogger";
import { errorHandler } from "@/middleware/errorHandler";

const app = express();
const env = process.env.NODE_ENV || "development";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

if (env !== "production") {
  app.use(morgan("dev"));
}

app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Express startup kit is ready" });
});

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
