import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { createNote, getNotes } from "../services/note.service";

export const handleCreateNote = asyncHandler(
  async (req: Request, res: Response) => {
    const note = await createNote(req);
    res.status(201).json(note);
  }
);

export const handleGetNotes = asyncHandler(
  async (req: Request, res: Response) => {
    const notes = await getNotes();
    res.status(200).json(notes);
  }
);

export const getNote = asyncHandler(async (req: Request, res: Response) => {});
