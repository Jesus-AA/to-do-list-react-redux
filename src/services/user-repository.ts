import { Payload } from '../model/payload';
import { User, UserLoginData, UserNoId } from '../model/user';

export class ApiUserRepository {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async register(newUser: UserNoId): Promise<User> {
    const response = await fetch(`${this.urlBase}/register`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data;
  }

  async login(user: UserLoginData): Promise<Payload> {
    const response = await fetch(`${this.urlBase}/login`, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });
    const payload = await response.json();
    return payload;
  }
}
