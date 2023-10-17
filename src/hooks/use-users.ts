import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserLoginData, UserNoId } from '../model/user';
import { logout } from '../redux/user-slice';
import { loginThunk, registerThunk } from '../redux/user-thunks';
import { ApiUserRepository } from '../services/user-repository';
import { RootState, ToDoListDispatch } from '../store/store';

export function useUsers() {
  const repo = useMemo(
    () => new ApiUserRepository('http://localhost:4300/users'),
    []
  );

  const { loginStatus, registerStatus, token, user, errorSource, errorCode } =
    useSelector((state: RootState) => state.user);
  const userDispatch = useDispatch<ToDoListDispatch>();

  const userRegister = async (newUser: UserNoId) => {
    userDispatch(registerThunk({ repo, newUser }));
  };

  const userLogin = async (user: UserLoginData) => {
    userDispatch(loginThunk({ repo, user }));
  };

  const userLogout = () => {
    userDispatch(logout());
    return;
  };

  return {
    userDispatch,
    userRegister,
    userLogin,
    loginStatus,
    registerStatus,
    token,
    user,
    userLogout,
    errorSource,
    errorCode,
  };
}
