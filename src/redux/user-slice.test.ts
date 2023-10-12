import userReducer, { logout } from '../redux/user-slice';
import { UserState } from './user-slice';
import { loginThunk, registerThunk } from './user-thunks';
const mockedInitialState: UserState = {
  user: undefined,
  loginStatus: '',
  registerStatus: '',
  token: undefined,
} as UserState;

describe('Given the userSlice', () => {
  describe('When error is presented', () => {
    test('Then, when register is rejected', () => {
      const newState = userReducer(mockedInitialState, registerThunk.rejected);
      expect(newState.registerStatus).toEqual('error');
    });
    test('Then, when login is rejected', () => {
      const newState = userReducer(mockedInitialState, loginThunk.rejected);
      expect(newState.loginStatus).toEqual('loginerror');
    });
  });
  describe('When we use the slice actions', () => {
    test('Then, when we use the logout() action', () => {
      const newState = userReducer(mockedInitialState, logout());
      expect(newState.loginStatus).toEqual('');
    });
  });
});
