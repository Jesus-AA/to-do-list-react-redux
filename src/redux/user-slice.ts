import { createSlice } from '@reduxjs/toolkit';
import { User } from '../model/user';
import { loginThunk, registerThunk } from './user-thunks';

export type UserState = {
  user: User;
  loginStatus: 'logged' | 'loginerror' | 'loading' | undefined;
  registerStatus: 'registered' | 'loading' | 'error' | undefined;
  token: string | undefined;
  errorCode: number | undefined;
  errorSource: string | undefined;
};

const initialState: UserState = {
  user: {} as User,
  loginStatus: undefined,
  registerStatus: undefined,
  token: undefined,
  errorCode: undefined,
  errorSource: undefined,
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
      state.token = payload.token;
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.loginStatus = 'loginerror';
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
