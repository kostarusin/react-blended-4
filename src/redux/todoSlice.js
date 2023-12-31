import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  // Имя слайса
  name: 'todos',
  // Начальное состояние редюсера слайса
  initialState: {
    items: [],
  },
  // Объект редюсеров
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

// Генераторы экшенов
export const { addTodo, deleteTodo } = todoSlice.actions;
// Редюсер слайса
export const todoReducer = todoSlice.reducer;
