import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./slices/loginSlice";
import { postsReducer } from "./slices/postsSlice";

export const store = configureStore({
    reducer: {
        authReducers,
        postsReducer
    }
})





export type storeDispatch = typeof store.dispatch


export type storeState = ReturnType<typeof store.getState>