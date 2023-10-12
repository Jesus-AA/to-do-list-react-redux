import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/user-slice';

export const toDoListStore = configureStore({
  reducer: {
    user: () => userReducer,
  },
});

export type ToDoListDispatch = typeof toDoListStore.dispatch;
export type RootState = ReturnType<typeof toDoListStore.getState>;
