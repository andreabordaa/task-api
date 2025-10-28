import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

export async function findTaskById(id) {
  const task = await prisma.task.findUnique({ where: { id } });
  return task;
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
