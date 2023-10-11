export type UserNoId = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserId = {
  id: string;
};

export type User = UserNoId & UserId;
