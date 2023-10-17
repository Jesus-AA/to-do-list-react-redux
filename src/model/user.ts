export type UserLoginData = {
  email: string;
  password: string;
};

export type UserNoId = UserLoginData & {
  firstName: string;
  lastName: string;
  tasks: [];
};

export type UserId = {
  id: string;
};

export type User = UserNoId & UserId;
