import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task, TaskNoId } from '../model/task';
import {
  createTaskThunk,
  deleteTaskThunk,
  getAllTasksThunk,
  isDoneTaskThunk,
} from '../redux/task-thunks';
import { ApiTaskRepository } from '../services/task-repository';
import { RootState, ToDoListDispatch } from '../store/store';

export function useTasks() {
  const repo = useMemo(
    () => new ApiTaskRepository('http://localhost:4300/tasks'),
    []
  );

  const { tasks, loadingStatus } = useSelector(
    (state: RootState) => state.task
  );
  const taskDispatch = useDispatch<ToDoListDispatch>();

  const getTasks = useCallback(async () => {
    taskDispatch(getAllTasksThunk(repo));
  }, [repo, taskDispatch]);

  const createTask = async (newTask: TaskNoId) => {
    taskDispatch(createTaskThunk({ repo, newTask }));
  };

  const deleteTask = async (task: Task) => {
    taskDispatch(deleteTaskThunk({ repo, task }));
  };

  const updateTask = async (task: Task) => {
    taskDispatch(isDoneTaskThunk({ repo, task }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function sortByDate(a: any, b: any) {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  }

  return {
    createTask,
    getTasks,
    tasks,
    deleteTask,
    loadingStatus,
    updateTask,
    sortByDate,
  };
}
