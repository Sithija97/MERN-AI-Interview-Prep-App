import express from "express";
import { handleCreateNote, handleGetNotes } from "../controllers";
import authMiddleware from "../middleware/auth.middleware";

const noteRoutes = express.Router();

noteRoutes
  .route("/")
  .post(authMiddleware.verifyToken, handleCreateNote)
  .get(handleGetNotes);

export default noteRoutes;
