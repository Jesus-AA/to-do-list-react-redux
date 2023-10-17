import { useUsers } from '../../hooks/use-users';
import { Task } from '../../model/task';
import { TaskCard } from '../task-card/task-card';

export function Tasks() {
  const { user } = useUsers();

  return (
    <div>
      <h2>To-Do List</h2>
      {user.tasks.map((item: Task, index: number) => (
        <TaskCard key={index} task={item}></TaskCard>
      ))}
    </div>
  );
}
