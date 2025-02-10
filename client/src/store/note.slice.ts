import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INoteState } from "../models";
import { LoadingStates } from "../enums";
import noteService from "../services/note";

const initialState: INoteState = {
  notes: [],
  createNoteStatus: LoadingStates.IDLE,
  createNoteSuccess: false,
  createNoteError: false,
  getNoteStatus: "LoadingStates.IDLE",
  getNoteSuccess: false,
  getNoteError: false,
};

export const createNotes = createAsyncThunk(
  "notes/create",
  async (payload: FormData, thunkAPI) => {
    try {
      const response = noteService.createNote(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getNotes = createAsyncThunk(
  "notes/getAll",
  async (_, thunkAPI) => {
    try {
      const response = noteService.getNotes();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getNotesByUser = createAsyncThunk(
  "notes/getMine",
  async (_, thunkAPI) => {
    try {
      const response = noteService.getNotesByUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const NoteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create
      .addCase(createNotes.pending, (state) => {
        state.createNoteStatus = LoadingStates.LOADING;
        state.createNoteError = false;
      })
      .addCase(createNotes.fulfilled, (state) => {
        state.createNoteSuccess = true;
        state.createNoteStatus = LoadingStates.SUCCESS;
      })
      .addCase(createNotes.rejected, (state) => {
        state.createNoteStatus = LoadingStates.FAILURE;
        state.createNoteError = true;
      })

      // get all
      .addCase(getNotes.pending, (state) => {
        state.getNoteStatus = LoadingStates.LOADING;
        state.getNoteError = false;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.getNoteSuccess = true;
        state.getNoteStatus = LoadingStates.SUCCESS;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state) => {
        state.getNoteStatus = LoadingStates.FAILURE;
        state.getNoteError = true;
      });
  },
});

// export const {  } = NoteSlice.actions;
export default NoteSlice.reducer;
