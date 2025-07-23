import "express-async-errors";
import express from "express";
import cors from "cors";
import { routes } from "./routes";
import uploadConfig from "./configs/upload"

import { errorHandling } from "./middlewares/error-handling";
import { z } from "zod";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes);

app.get("/", (req, res) => {
  const bodySchema = z.object({
    age: z.number().min(18),
  });
  const { age } = bodySchema.parse(req.body);
  res.send("Hello World");
});

app.use(errorHandling);

export { app };
