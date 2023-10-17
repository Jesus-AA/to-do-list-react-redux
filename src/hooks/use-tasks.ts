import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksThunk } from '../redux/task-thunks';
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

  return {
    getTasks,
    tasks,
    loadingStatus,
  };
}
