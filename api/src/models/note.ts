import { Document, model, Schema } from "mongoose";
import { INote } from "../interfaces";

export interface INoteModel extends INote, Document {}

const NoteSchema = new Schema<INoteModel>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    isDescriptive: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Note = model<INoteModel>("Note", NoteSchema);
export default Note;
