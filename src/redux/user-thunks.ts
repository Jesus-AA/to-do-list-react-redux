import { createAsyncThunk } from '@reduxjs/toolkit';
import { Payload } from '../model/payload';
import { User, UserLoginData, UserNoId } from '../model/user';
import { ApiUserRepository } from '../services/user-repository';

export const registerThunk = createAsyncThunk<
  User,
  {
    repo: ApiUserRepository;
    newUser: UserNoId;
  }
>('user/create', async ({ repo, newUser }, { rejectWithValue }) => {
  try {
    const fullUser = await repo.register(newUser);
    return fullUser;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const loginThunk = createAsyncThunk<
  Payload,
  {
    repo: ApiUserRepository;
    user: UserLoginData;
  }
>('user/login', async ({ repo, user }) => {
  const loggedUser = await repo.login(user);
  return loggedUser;
});
