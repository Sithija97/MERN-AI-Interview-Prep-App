import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPostState } from "../models";
import postService from "../services/post";
import { LoadingStates } from "../enums";

const initialState: IPostState = {
  posts: [],
  createPostStatus: LoadingStates.IDLE,
  createPostSuccess: false,
  createPostError: false,
  getPostStatus: "LoadingStates.IDLE",
  getPostSuccess: false,
  getPostError: false,
};

export const createPosts = createAsyncThunk(
  "posts/create",
  async (payload: FormData, thunkAPI) => {
    try {
      const response = postService.createPost(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      const response = postService.getPosts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPostsByUser = createAsyncThunk(
  "posts/getMine",
  async (_, thunkAPI) => {
    try {
      const response = postService.getPostsByUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create
      .addCase(createPosts.pending, (state) => {
        state.createPostStatus = LoadingStates.LOADING;
        state.createPostError = false;
      })
      .addCase(createPosts.fulfilled, (state) => {
        state.createPostSuccess = true;
        state.createPostStatus = LoadingStates.SUCCESS;
      })
      .addCase(createPosts.rejected, (state) => {
        state.createPostStatus = LoadingStates.FAILURE;
        state.createPostError = true;
      })

      // get all
      .addCase(getPosts.pending, (state) => {
        state.getPostStatus = LoadingStates.LOADING;
        state.getPostError = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.getPostSuccess = true;
        state.getPostStatus = LoadingStates.SUCCESS;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.getPostStatus = LoadingStates.FAILURE;
        state.getPostError = true;
      });
  },
});

// export const {  } = PostSlice.actions;
export default PostSlice.reducer;
