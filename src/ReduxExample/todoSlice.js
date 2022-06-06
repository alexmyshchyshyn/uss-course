import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
