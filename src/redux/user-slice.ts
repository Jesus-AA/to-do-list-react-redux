import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../model/task';
import { User } from '../model/user';
import {
  createTaskThunk,
  deleteTaskThunk,
  isDoneTaskThunk,
} from './task-thunks';
import { loginThunk, registerThunk } from './user-thunks';

export type UserState = {
  user: User;
  tasks: User['tasks'];
  loginStatus: 'logged' | 'loginerror' | 'loading' | undefined;
  registerStatus: 'registered' | 'loading' | 'error' | undefined;
  token: string | undefined;
  errorCode: number | undefined;
  errorSource: string | undefined;
  deletingStatus: undefined | 'loading' | 'deleted' | 'error';
  updatingTask: undefined | 'loading' | 'updated' | 'error';
  creatingTask: undefined | 'loading' | 'created' | 'error';
};

const initialState: UserState = {
  user: {} as User,
  tasks: [],
  loginStatus: undefined,
  registerStatus: undefined,
  token: undefined,
  errorCode: undefined,
  errorSource: undefined,
  deletingStatus: undefined,
  updatingTask: undefined,
  creatingTask: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.loginStatus = undefined;
      state.token = undefined;
      state.user = {} as User;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerThunk.pending, (state) => {
      state.registerStatus = 'loading';
    });
    builder.addCase(registerThunk.fulfilled, (state) => {
      state.registerStatus = 'registered';
      state.errorCode = undefined;
      state.errorSource = undefined;
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.registerStatus = 'error';
      state.errorCode = action.payload.code;
      state.errorSource = action.payload.keyPattern;
    });
    builder.addCase(loginThunk.pending, (state) => {
      state.loginStatus = 'loading';
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.loginStatus = 'logged';
      state.user = payload.user;
      state.tasks = payload.user.tasks;
      state.token = payload.token;
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.loginStatus = 'loginerror';
    });
    builder.addCase(deleteTaskThunk.pending, (state) => {
      state.deletingStatus = 'loading';
    });
    builder.addCase(
      deleteTaskThunk.fulfilled,
      (state, { payload }: { payload: Task['id'] }) => {
        state.deletingStatus = 'deleted';
        state.tasks = state.user.tasks.filter((tasks) => tasks.id !== payload);
        state.user.tasks = state.tasks;
      }
    );
    builder.addCase(isDoneTaskThunk.pending, (state) => {
      state.updatingTask = 'loading';
    });
    builder.addCase(
      isDoneTaskThunk.fulfilled,
      (state, { payload }: { payload: Task }) => {
        state.tasks = state.tasks.map((item) =>
          item.id === payload.id ? payload : item
        );
        state.user.tasks = state.tasks;
      }
    );
    builder.addCase(createTaskThunk.pending, (state) => {
      state.creatingTask = 'loading';
    });
    builder.addCase(
      createTaskThunk.fulfilled,
      (state, { payload }: { payload: Task }) => {
        state.creatingTask = 'created';
        state.tasks.unshift(payload);
        state.user.tasks = state.tasks;
      }
    );
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
