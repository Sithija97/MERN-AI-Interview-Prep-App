import { Schema } from "mongoose";

export interface INote {
  title: string;
  description: string;
  completed: boolean;
  isDescriptive: boolean;
  user: Schema.Types.ObjectId;
}
