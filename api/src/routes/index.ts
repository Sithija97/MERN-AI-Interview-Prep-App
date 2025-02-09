import { Express } from "express";
import authRoutes from "./auth";
import postRoutes from "./note";

export function registerRoutes(app: Express) {
  app.use("/api/auth", authRoutes);
  app.use("/api/note", postRoutes);
}
