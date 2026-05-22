const { v4: uuidv4 } = require('uuid');
const repository = require('../repositories/task.repository');
const {
  validateCreateTask,
  validateUpdateTask,
  validateTaskId
} = require('../validators/task.validator');
const { AppError } = require('../utils/app-error');

function createTask(payload) {
  validateCreateTask(payload);

  const timestamp = new Date().toISOString();
  const task = {
    id: uuidv4(),
    title: payload.title.trim(),
    description: typeof payload.description === 'string' ? payload.description : '',
    completed: false,
    createdAt: timestamp,
    updatedAt: timestamp,
    completedAt: null
  };

  repository.create(task);
  return task;
}

function listTasks() {
  return repository.findAll();
}

function getTaskById(id) {
  validateTaskId(id);
  const task = repository.findById(id);

  if (!task) {
    throw new AppError(404, 'Task not found', {
      code: 'TASK_NOT_FOUND',
      details: `Task with id ${id} does not exist`
    });
  }

  return task;
}

function updateTask(id, payload) {
  validateTaskId(id);
  validateUpdateTask(payload);

  const task = repository.findById(id);
  if (!task) {
    throw new AppError(404, 'Task not found', {
      code: 'TASK_NOT_FOUND',
      details: `Task with id ${id} does not exist`
    });
  }

  const updatedTask = {
    ...task,
    title: typeof payload.title === 'string' ? payload.title.trim() : task.title,
    description: typeof payload.description === 'string' ? payload.description : task.description,
    updatedAt: new Date().toISOString()
  };

  repository.update(id, updatedTask);
  return updatedTask;
}

function deleteTask(id) {
  validateTaskId(id);
  const task = repository.findById(id);

  if (!task) {
    throw new AppError(404, 'Task not found', {
      code: 'TASK_NOT_FOUND',
      details: `Task with id ${id} does not exist`
    });
  }

  repository.remove(id);
  return id;
}

function completeTask(id) {
  validateTaskId(id);
  const task = repository.findById(id);

  if (!task) {
    throw new AppError(404, 'Task not found', {
      code: 'TASK_NOT_FOUND',
      details: `Task with id ${id} does not exist`
    });
  }

  const timestamp = new Date().toISOString();
  const completedTask = {
    ...task,
    completed: true,
    completedAt: timestamp,
    updatedAt: timestamp
  };

  repository.update(id, completedTask);
  return completedTask;
}

module.exports = {
  createTask,
  listTasks,
  getTaskById,
  updateTask,
  deleteTask,
  completeTask
};
