export type INote = {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string; // ISO timestamp format
  updatedAt: string; // ISO timestamp format
};

export type INoteState = {
  notes: INote[];
  selectedNote: INote | undefined;
  createNoteStatus: string;
  createNoteSuccess: boolean;
  createNoteError: boolean;
  getNoteStatus: string;
  getNoteSuccess: boolean;
  getNoteError: boolean;
};
