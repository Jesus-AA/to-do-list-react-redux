import { Task, TaskNoId } from '../model/task';

export class ApiTaskRepository {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(): Promise<Task[]> {
    const response = await fetch(this.urlBase);
    if (!response.ok)
      throw new Error(
        `Error ${response.status}: ${(await response).statusText}`
      );
    const toDoList = await response.json();
    return toDoList;
  }

  async getById(id: string): Promise<Task> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const task = await response.json();
    return task;
  }

  async create(item: TaskNoId): Promise<Task> {
    const response = await fetch(this.urlBase, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const newTask = await response.json();
    return newTask;
  }

  async update(id: string, item: Partial<Task>): Promise<Task> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const updatedTask = await response.json();
    return updatedTask;
  }

  async delete(id: string): Promise<void> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
}
