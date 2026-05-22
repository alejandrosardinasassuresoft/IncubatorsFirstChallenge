const express = require('express');
const controller = require('../controllers/task.controller');

const router = express.Router();

router.post('/', controller.createTask);
router.get('/', controller.listTasks);
router.get('/:id', controller.getTaskById);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);
router.patch('/:id/complete', controller.completeTask);

module.exports = router;
