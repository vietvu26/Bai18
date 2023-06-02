import { configureStore } from "@reduxjs/toolkit";
import todo from "./todoapp.js";
import list from "./listapp.js";
import studentReducer from "./student.js";

export const store = configureStore({
  reducer: {
    todos: todo,
    lists: list,
    students: studentReducer,
  },
});