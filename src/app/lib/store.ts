import quizLockReducer from "./features/quizLock/quizLockSlice";
import quizSolvedReducer from "./features/quizSolved/quizSolvedSlice";

import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      quizLock: quizLockReducer,
      quizSolved: quizSolvedReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
