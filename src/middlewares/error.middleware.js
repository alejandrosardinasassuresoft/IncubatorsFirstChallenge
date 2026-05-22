function notFoundHandler(req, res) {
  res.status(404).json({
    data: {
      code: 'ROUTE_NOT_FOUND',
      details: `Route ${req.method} ${req.originalUrl} does not exist`
    },
    message: 'Route not found',
    status: 404
  });
}

function errorHandler(error, req, res, next) {
  const status = error.status || 500;
  const message = error.message || 'Unexpected error';
  const data = error.data || {
    code: 'INTERNAL_SERVER_ERROR',
    details: 'An unexpected error occurred'
  };

  res.status(status).json({
    data,
    message,
    status
  });
}

module.exports = {
  notFoundHandler,
  errorHandler
};
