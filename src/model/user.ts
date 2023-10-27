import { Task } from './task';

export type UserLoginData = {
  email: string;
  password: string;
};

export type UserNoId = UserLoginData & {
  firstName: string;
  lastName: string;
};

export type UserId = {
  id: string;
};

export type User = UserNoId &
  UserId & {
    tasks: Task[];
  };
