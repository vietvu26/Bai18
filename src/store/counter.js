import { createSlice } from "@reduxjs/toolkit";

let nextID = 1;

const initialState = {
  todos: [],
  filter: "all",
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.todos.push({ id, text, completed: false });
      },
      removeTodo: (state, action) => {
        const { id } = action.payload;
        state.todos = state.todos.filter((todo) => todo.id !== id);
      },
      setFilter: (state, action) => {
        const { filter } = action.payload;
        state.filter = filter;
      },
    },
  },
});
const todosReducer = todosSlice.reducer;
export const { addTodo, removeTodo, setFilter } = todosSlice.actions;
export default todosReducer;