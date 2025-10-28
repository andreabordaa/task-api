import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function getTaskById(id) {
  return taskRepository.findTaskById(id);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
