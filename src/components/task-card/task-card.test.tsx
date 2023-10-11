import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Task } from '../../model/task';
import { TaskCard } from './task-card';

describe('Given the component TaskCard', () => {
  describe('When it is rendered', () => {
    const mockTask = { title: 'Kubo' } as unknown as Task;
    render(<TaskCard task={mockTask}></TaskCard>);
    test('Then, a heading should be rendered', () => {
      const title = screen.getByRole('heading');
      expect(title).toBeInTheDocument();
    });
  });
});
