import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { UserLoginData, UserNoId } from '../model/user';
import { toDoListStore } from '../store/store';
import { useUsers } from './use-users';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

describe('Given the custom hook useUsers()', () => {
  function TestComponent() {
    const { userLogin, userLogout, userRegister } = useUsers();

    const mockUserRegister = {} as unknown as UserNoId;
    const mockUserLogin = {} as unknown as UserLoginData;
    return (
      <>
        <button role="button" onClick={() => userRegister(mockUserRegister)}>
          1
        </button>
        <button role="button" onClick={() => userLogin(mockUserLogin)}>
          2
        </button>
        <button role="button" onClick={() => userLogout()}>
          3
        </button>
      </>
    );
  }
  describe('When the component run the hook', () => {
    beforeEach(() => {
      render(
        <Provider store={toDoListStore}>
          <TestComponent></TestComponent>
        </Provider>
      );
    });
    test('Then, when we click on button 1', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then, when we click on button 2', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then, when we click on button 3', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
