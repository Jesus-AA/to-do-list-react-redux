import { configureStore } from '@reduxjs/toolkit';

export const toDoListStore = configureStore({
  reducer: {
    toDoList: () => {},
  },
});

export type ToDoListDispatch = typeof toDoListStore.dispatch;
export type RootState = ReturnType<typeof toDoListStore.getState>;
