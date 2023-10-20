import { BiCheckSquare, BiSquare } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useTasks } from '../../hooks/use-tasks';
import { Task } from '../../model/task';
import styles from './task-card.module.scss';

type Props = {
  task: Task;
};

export function TaskCard({ task }: Props) {
  const { deleteTask, updateTask } = useTasks();

  const handleChange = () => {
    const taskToUpdate = { ...task, isCompleted: !task.isCompleted };

    updateTask(taskToUpdate);
  };

  return (
    <div className={styles['card-div']}>
      <h3 className={styles['card-title']}>{task.title}</h3>
      <p className={styles['card-desc']}>{task.description}</p>
      <div className={styles['buttons-div']}>
        <span
          className={styles['delete']}
          role="button"
          onClick={() => deleteTask(task)}
        >
          <MdDelete></MdDelete>
        </span>
        <span
          onClick={handleChange}
          className={styles['is-it-done']}
          role="button"
        >
          {task.isCompleted ? (
            <BiCheckSquare className={styles['is-done']}></BiCheckSquare>
          ) : (
            <BiSquare></BiSquare>
          )}
        </span>
      </div>
    </div>
  );
}
