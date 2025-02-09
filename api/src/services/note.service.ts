import { Request } from "express";
import { INoteModel } from "../models";
import Note from "../models/note";

export const createNote = async (req: Request): Promise<INoteModel> => {
  const { title, description, user } = req.body;

  try {
    const note = new Note({ title, description, user });
    return await note.save();
  } catch (error) {
    throw new Error("Unexpected error during publishing your note.");
  }
};

export const getNotes = async (): Promise<INoteModel[]> => {
  try {
    const notes = await Note.find().populate("user").sort({ createdAt: -1 });
    return notes;
  } catch (error) {
    throw new Error("Unexpected error during fetching notes.");
  }
};
