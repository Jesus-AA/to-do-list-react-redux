import { createSlice } from '@reduxjs/toolkit';
import { User } from '../model/user';
import { loginThunk, registerThunk } from './user-thunks';

export type UserState = {
  user: User | undefined;
  loginStatus: '' | 'logged' | 'loginerror' | 'loading';
  registerStatus: 'registered' | 'loading' | 'error' | '';
  token: string | undefined;
};

const initialState: UserState = {
  user: undefined,
  loginStatus: '',
  registerStatus: '',
  token: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerThunk.pending, (state) => {
      state.registerStatus = 'loading';
    });
    builder.addCase(registerThunk.fulfilled, (state) => {
      state.registerStatus = 'registered';
    });
    builder.addCase(registerThunk.rejected, (state) => {
      state.registerStatus = 'error';
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

export const actions = userSlice.actions;
export default userSlice.reducer;
