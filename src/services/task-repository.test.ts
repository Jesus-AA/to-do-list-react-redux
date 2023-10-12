import { Task, TaskNoId } from '../model/task';
import { ApiToDoListRepository } from './task-repository';

describe('Given the class ApiToDoListRepository', () => {
  describe('When it is instantiated', () => {
    const repo = new ApiToDoListRepository('');
    test('When the method getAll() is called', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(['Test']),
      });
      await repo.getAll();
      expect(global.fetch).toHaveBeenCalled();
    });
    test('When the getById() method is called', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({}),
      });
      await repo.getById('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('When the method create() is called', async () => {
      const mockTask = {} as unknown as TaskNoId;
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({}),
      });
      await repo.create(mockTask);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('When the update() method is called', async () => {
      const mockUpdate = {} as unknown as Task;
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({}),
      });
      await repo.update('', mockUpdate);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('When the delete() method is called', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
      });
      await repo.delete('');
      expect(global.fetch).toHaveBeenCalled();
    });
  });
  describe('When it is instantiated with errors', () => {
    const repo = new ApiToDoListRepository('');
    test('Then, when the getAll() method is called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
      expect(repo.getAll()).rejects.toThrow();
    });
    test('Then, when the getById() method is called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
      expect(repo.getById('')).rejects.toThrow();
    });
    test('Then, when the create() method is called', () => {
      const mockTask = {} as unknown as TaskNoId;
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
      expect(repo.create(mockTask)).rejects.toThrow();
    });
    test('Then, when the update() method is called', () => {
      const mockUpdate = {} as unknown as Task;
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
      expect(repo.update('', mockUpdate)).rejects.toThrow();
    });
    test('Then, when the delete() method is called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
      expect(repo.delete('')).rejects.toThrow();
    });
  });
});
