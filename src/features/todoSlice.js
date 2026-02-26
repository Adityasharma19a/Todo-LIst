import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    toggleStatus: (state, action) => {
      const task = state.find(todo => todo.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    deleteTask: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTask, toggleStatus, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;