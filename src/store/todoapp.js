import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;

const initialState = {
  items: [], // Khởi tạo items là một mảng trống
  filter: "all", // Khởi tạo filter với giá trị mặc định
};

const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push({ id: nextId++, title: action.payload, finish: false });
    },
    finish: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) todo.finish = !todo.finish;
    },
    remove: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const couterReducer = counterSlice.reducer;
export const { add, finish, remove, setFilter } = counterSlice.actions;
export default couterReducer;