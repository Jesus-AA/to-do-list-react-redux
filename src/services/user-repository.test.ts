import { UserLoginData, UserNoId } from '../model/user';
import { ApiUserRepository } from './user-repository';

describe('Given the class ApiUserRepository', () => {
  describe('When it is instantiated', () => {
    const userRepo = new ApiUserRepository('');
    test('Then, when the register() method is called', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({}),
      });
      const mockUser = {} as unknown as UserNoId;
      await userRepo.register(mockUser);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then, when the login() method is called', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({}),
      });
      const mockUserLogin = {} as unknown as UserLoginData;
      await userRepo.login(mockUserLogin);
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
