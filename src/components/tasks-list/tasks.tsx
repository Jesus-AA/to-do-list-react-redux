import { useUsers } from '../../hooks/use-users';
import { Task } from '../../model/task';
import { TaskCard } from '../task-card/task-card';
import styles from './tasks.module.scss';

export function Tasks() {
  const { user } = useUsers();

  return (
    <div className={styles['main-div']}>
      <h2 className={styles['main-div-title']}>To-Do List</h2>
      <div className={styles['card-div']}>
        {user.tasks.map((item: Task, index: number) => (
          <TaskCard key={index} task={item}></TaskCard>
        ))}
      </div>
    </div>
  );
}
