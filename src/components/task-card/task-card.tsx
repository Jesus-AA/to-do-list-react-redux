import { MdDelete } from 'react-icons/md';
import { useTasks } from '../../hooks/use-tasks';
import { Task } from '../../model/task';
import styles from './task-card.module.scss';

type Props = {
  task: Task;
};

export function TaskCard({ task }: Props) {
  const { deleteTask } = useTasks();

  return (
    <div className={styles['card-div']}>
      <h3 className={styles['card-title']}>{task.title}</h3>
      <p className={styles['card-desc']}>{task.description}</p>
      <span role="button" onClick={() => deleteTask(task)}>
        <MdDelete></MdDelete>
      </span>
    </div>
  );
}
