import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../redux/task-slice';
import userReducer from '../redux/user-slice';

export const toDoListStore = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});

export type ToDoListDispatch = typeof toDoListStore.dispatch;
export type RootState = ReturnType<typeof toDoListStore.getState>;
