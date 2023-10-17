import { createAsyncThunk } from '@reduxjs/toolkit';
import { Task, TaskNoId } from '../model/task';
import { ApiTaskRepository } from '../services/task-repository';

export const getAllTasksThunk = createAsyncThunk<Task[], ApiTaskRepository>(
  'task/load',
  async (repo) => {
    const allTasks = await repo.getAll();
    return allTasks;
  }
);

export const createTaskThunk = createAsyncThunk<
  Task,
  {
    repo: ApiTaskRepository;
    newTask: TaskNoId;
  }
>('task/create', async ({ repo, newTask }) => {
  const fullTask = await repo.create(newTask);
  return fullTask;
});
