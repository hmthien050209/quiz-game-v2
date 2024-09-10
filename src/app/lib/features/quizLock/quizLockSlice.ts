import { quizzes } from "../../data";

import { createSlice } from "@reduxjs/toolkit";

export const quizLockSlice = createSlice({
  name: "quiz-lock",
  initialState: {
    value: Array<boolean>(quizzes.length).fill(true),
  },
  reducers: {
    lock: (state, action) => {
      state.value[action.payload] = true;
    },
    unlock: (state, action) => {
      state.value[action.payload] = false;
    },
  },
});

export const { lock, unlock } = quizLockSlice.actions;
export default quizLockSlice.reducer;
