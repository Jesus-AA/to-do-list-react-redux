import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../model/task';
import { getAllTasksThunk } from './task-thunks';

export type TaskState = {
  tasks: Task[];
  loadingStatus: undefined | 'loading' | 'loaded' | 'error' | 'deleted';
  deletingStatus: undefined | 'loading' | 'deleted' | 'error';
};

const initialState: TaskState = {
  tasks: [],
  loadingStatus: undefined,
  deletingStatus: undefined,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTasksThunk.pending, (state) => {
      state.loadingStatus = 'loading';
    });
    builder.addCase(
      getAllTasksThunk.fulfilled,
      (state, { payload }: { payload: Task[] }) => {
        state.loadingStatus = 'loaded';
        state.tasks = payload;
      }
    );
    builder.addCase(getAllTasksThunk.rejected, (state) => {
      state.loadingStatus = 'error';
    });
  },
});

export const actions = taskSlice.actions;
export default taskSlice.reducer;
