import { User } from './user';

export type TaskNoId = {
  title: string;
  author: User['id'];
  description: string;
  isCompleted?: boolean;
  date?: string;
};

export type TaskId = {
  id: string;
};

export type Task = TaskNoId & TaskId;
