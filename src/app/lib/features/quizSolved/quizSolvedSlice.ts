import { quizzes } from "../../data";

import { createSlice } from "@reduxjs/toolkit";

export const quizSolvedSlice = createSlice({
  name: "quiz-solved",
  initialState: {
    value: Array<boolean>(quizzes.length).fill(false),
  },
  reducers: {
    solve: (state, action) => {
      state.value[action.payload] = true;
    },
    unsolve: (state, action) => {
      state.value[action.payload] = false;
    },
    solveAll: (state) => {
      state.value.fill(false, 0, state.value.length);
    },
  },
});

export const { solve, unsolve, solveAll } = quizSolvedSlice.actions;
export default quizSolvedSlice.reducer;
