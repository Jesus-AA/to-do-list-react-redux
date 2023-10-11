import { Task } from '../../model/task';

type Props = {
  task: Task;
};

export function TaskCard({ task }: Props) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}
