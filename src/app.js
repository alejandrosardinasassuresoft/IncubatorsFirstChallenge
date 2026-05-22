const express = require('express');
const taskRoutes = require('./routes/task.routes');
const { errorHandler, notFoundHandler } = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use('/tasks', taskRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
