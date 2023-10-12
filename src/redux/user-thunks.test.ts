import { UserLoginData, UserNoId } from '../model/user';
import { ApiUserRepository } from '../services/user-repository';
import { toDoListStore } from '../store/store';
import { loginThunk, registerThunk } from './user-thunks';

describe('Given the user-thunks', () => {
  describe('When they are used', () => {
    const mockRepo = {
      register: jest.fn(),
      login: jest.fn().mockResolvedValueOnce({ token: '', user: {} }),
    } as unknown as ApiUserRepository;
    test('Then, the registerThunk should call the userRepo', () => {
      const mockUser = {} as unknown as UserNoId;
      toDoListStore.dispatch(
        registerThunk({ repo: mockRepo, newUser: mockUser })
      );
      expect(mockRepo.register).toHaveBeenCalled();
    });
    test('Then, the loginThunk should call the userRepo', () => {
      const mockLoginUser = {} as unknown as UserLoginData;
      toDoListStore.dispatch(
        loginThunk({ repo: mockRepo, user: mockLoginUser })
      );
      expect(mockRepo.login).toHaveBeenCalled();
    });
  });
});
