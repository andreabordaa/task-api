import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

export async function getTaskByIdHandler(req, res, next) {
  let id = Number(req.params.id);
  if (id == null) {
    return res.status(400).json({ message: 'ID must be a number' });
  }
  const task = await taskService.getTaskById(id);
  if (!task) {
    return res.status(404).json({ message: 'Task Not Found' });
  }
  res.status(200).json(task);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
