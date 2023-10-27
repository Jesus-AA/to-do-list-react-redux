import { SyntheticEvent } from 'react';
import { useTasks } from '../../hooks/use-tasks';
import { useUsers } from '../../hooks/use-users';
import { TaskNoId } from '../../model/task';
import styles from './new-task.module.scss';

export function CreateTask() {
  const { createTask } = useTasks();
  const { user } = useUsers();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;
    const newTask: TaskNoId = {
      title: (formElement.elements.namedItem('title') as HTMLFormElement).value,
      description: (
        formElement.elements.namedItem('description') as HTMLFormElement
      ).value,
      author: user['id'],
    };

    createTask(newTask);
  };

  return (
    <div>
      <form role="form" onSubmit={handleSubmit}>
        <div className={styles['section']}>
          <div className={styles['message-div']}>
            <label className={styles['form-label']} htmlFor="title">
              Title
            </label>
          </div>

          <div className={styles['input-div']}>
            <div>
              <input
                className={styles['input']}
                type="text"
                name="title"
                id="title"
                required
              />
            </div>
          </div>
        </div>
        <div className={styles['section']}>
          <div className={styles['message-div']}>
            <label className={styles['form-label']} htmlFor="description">
              description
            </label>
          </div>

          <div className={styles['input-div']}>
            <div>
              <input
                className={styles['input']}
                type="text"
                name="description"
                id="description"
                required
              />
            </div>
          </div>
        </div>
        <div className={styles['button-div']}>
          <button className={styles['button']} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
