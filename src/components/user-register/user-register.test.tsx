import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { toDoListStore } from '../../store/store';
import { Register } from './user-register';

describe('Given the Register() component', () => {
  describe('When, it is called', () => {
    render(
      <Provider store={toDoListStore}>
        <Register></Register>
      </Provider>
    );

    test('Then, it should render a form', async () => {
      const form = await screen.findByRole('form');
      expect(form).toBeInTheDocument();
    });
  });
});
