import { User } from './user';

export type TaskNoId = {
  title: string;
  author: User;
  isCompleted: boolean;
  date: Date;
};

export type TaskId = {
  id: string;
};

export type Task = TaskNoId & TaskId;
