import { SyntheticEvent } from 'react';
import { useTasks } from '../../hooks/use-tasks';
import { useUsers } from '../../hooks/use-users';
import { TaskNoId } from '../../model/task';

export function CreateTask() {
  const { createTask } = useTasks();
  const { user } = useUsers();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const newTask: TaskNoId = {
      title: 'New note..',
      description: 'This is a new note...',
      author: user['id'],
    };

    createTask(newTask);
  };

  return handleSubmit;
}
