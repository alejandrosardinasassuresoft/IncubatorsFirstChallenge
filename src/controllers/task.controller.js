const { constants } = require('http2');
const service = require('../services/task.service');

function createTask(req, res, next) {
  try {
    const task = service.createTask(req.body);
    res.status(constants.HTTP_STATUS_CREATED).json({
      data: task,
      message: 'Task created successfully',
      status: constants.HTTP_STATUS_CREATED
    });
  } catch (error) {
    next(error);
  }
}

function listTasks(req, res, next) {
  try {
    const tasks = service.listTasks();
    res.status(constants.HTTP_STATUS_OK).json({
      data: tasks,
      message: 'Tasks retrieved successfully',
      status: constants.HTTP_STATUS_OK
    });
  } catch (error) {
    next(error);
  }
}

function getTaskById(req, res, next) {
  try {
    const task = service.getTaskById(req.params.id);
    res.status(constants.HTTP_STATUS_OK).json({
      data: task,
      message: 'Task retrieved successfully',
      status: constants.HTTP_STATUS_OK
    });
  } catch (error) {
    next(error);
  }
}

function updateTask(req, res, next) {
  try {
    const task = service.updateTask(req.params.id, req.body);
    res.status(constants.HTTP_STATUS_OK).json({
      data: task,
      message: 'Task updated successfully',
      status: constants.HTTP_STATUS_OK
    });
  } catch (error) {
    next(error);
  }
}

function deleteTask(req, res, next) {
  try {
    const deletedTaskId = service.deleteTask(req.params.id);
    res.status(constants.HTTP_STATUS_OK).json({
      data: { id: deletedTaskId },
      message: 'Task deleted successfully',
      status: constants.HTTP_STATUS_OK
    });
  } catch (error) {
    next(error);
  }
}

function completeTask(req, res, next) {
  try {
    const task = service.completeTask(req.params.id);
    res.status(constants.HTTP_STATUS_OK).json({
      data: task,
      message: 'Task marked as completed successfully',
      status: constants.HTTP_STATUS_OK
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTask,
  listTasks,
  getTaskById,
  updateTask,
  deleteTask,
  completeTask
};
