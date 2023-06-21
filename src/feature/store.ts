import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./pages/todo.slice";
export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: { todo: todoReducer },
});
