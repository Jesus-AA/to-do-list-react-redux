import { IoIosAddCircle } from 'react-icons/io';
import { useUsers } from '../../hooks/use-users';
import { Task } from '../../model/task';
import { TaskCard } from '../task-card/task-card';
import styles from './tasks.module.scss';

export function Tasks() {
  const { user } = useUsers();

  return (
    <div className={styles['main-notes-div']}>
      <div className={styles['left-panel']}>
        <IoIosAddCircle className={styles['add-task']} />
      </div>
      <div className={styles['main-div']}>
        <div className={styles['main-div-title']}>
          <h2 className={styles['title']}>To-Do List</h2>
        </div>

        <div className={styles['card-div']}>
          <ul>
            {user.tasks.map((item: Task, index: number) => (
              <li key={index}>
                <TaskCard task={item}></TaskCard>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
