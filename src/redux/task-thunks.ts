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

export const deleteTaskThunk = createAsyncThunk<
  Task['id'],
  {
    repo: ApiTaskRepository;
    task: Task;
  }
>('task/delete', async ({ repo, task }) => {
  await repo.delete(task.id);

  return task.id;
});

export const isDoneTaskThunk = createAsyncThunk<
  Task,
  {
    repo: ApiTaskRepository;
    task: Task;
  }
>('task/isDone', async ({ repo, task }) => {
  const updatedTask = await repo.update(task.id, task);
  return updatedTask;
});
