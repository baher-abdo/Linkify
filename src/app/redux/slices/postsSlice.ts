import { Post } from "@/app/interfaces/Posts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: { posts: Post[]; isLoading: boolean; post: Post} = {
  post:null,
  posts: [],
  isLoading: false,
};
const headers = { token: localStorage.getItem("token") ?? "" };
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await axios.get(
    `https://linked-posts.routemisr.com/posts?limit=50`,
    { headers }
  );
  console.log(data.posts);
  return data.posts;
});
export const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async (postId: string) => {
    const { data } = await axios.get(
      `https://linked-posts.routemisr.com/posts/${postId}`,
      { headers }
    );
    console.log(data.post);
    return data.post;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(getSinglePost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSinglePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    });
  },
});

export const postsReducer = postSlice.reducer;
