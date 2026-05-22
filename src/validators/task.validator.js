const { AppError } = require('../utils/app-error');

function validateTaskId(id) {
  if (!id || typeof id !== 'string') {
    throw new AppError(400, 'Invalid request data', {
      code: 'VALIDATION_ERROR',
      details: {
        field: 'id',
        issue: 'id is required'
      }
    });
  }
}

function validateCreateTask(payload) {
  if (!payload || typeof payload.title !== 'string' || payload.title.trim() === '') {
    throw new AppError(400, 'Invalid request data', {
      code: 'VALIDATION_ERROR',
      details: {
        field: 'title',
        issue: 'title is required'
      }
    });
  }
}

function validateUpdateTask(payload) {
  const hasTitle = Object.prototype.hasOwnProperty.call(payload || {}, 'title');
  const hasDescription = Object.prototype.hasOwnProperty.call(payload || {}, 'description');

  if (!hasTitle && !hasDescription) {
    throw new AppError(400, 'Invalid request data', {
      code: 'VALIDATION_ERROR',
      details: {
        field: 'body',
        issue: 'at least one field is required'
      }
    });
  }

  if (hasTitle && (typeof payload.title !== 'string' || payload.title.trim() === '')) {
    throw new AppError(400, 'Invalid request data', {
      code: 'VALIDATION_ERROR',
      details: {
        field: 'title',
        issue: 'title must be a non-empty string'
      }
    });
  }

  if (hasDescription && typeof payload.description !== 'string') {
    throw new AppError(400, 'Invalid request data', {
      code: 'VALIDATION_ERROR',
      details: {
        field: 'description',
        issue: 'description must be a string'
      }
    });
  }
}

module.exports = {
  validateTaskId,
  validateCreateTask,
  validateUpdateTask
};
