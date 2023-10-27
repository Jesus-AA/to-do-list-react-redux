import { SyntheticEvent } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { useTasks } from '../../hooks/use-tasks';
import { useUsers } from '../../hooks/use-users';
import { Task, TaskNoId } from '../../model/task';
import { TaskCard } from '../task-card/task-card';
import styles from './tasks.module.scss';

export function Tasks() {
  const { user } = useUsers();

  const { createTask, sortByDate } = useTasks();

  const newNote = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const newTask: TaskNoId = {
      title: 'New note..',
      description: 'This is a new note...',
      author: user['id'],
    };

    createTask(newTask);
  };

  const userTasksToSort = user.tasks.map((item) => item);
  userTasksToSort.sort(sortByDate);

  return (
    <div className={styles['main-notes-div']}>
      <div className={styles['left-panel']}>
        <IoIosAddCircle className={styles['add-task']} onClick={newNote} />
      </div>
      <div className={styles['main-div']}>
        <div className={styles['main-div-title']}>
          <h2 className={styles['title']}>To-Do List</h2>
        </div>

        <div className={styles['card-div']}>
          <ul>
            {userTasksToSort.map((item: Task, index: number) => (
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
