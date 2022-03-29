const express = require('express')
const taskController = require('../controllers/task')

const router = express.Router()

router.route('/').get(taskController.getAllTasks).post(taskController.createTask);
router.route('/:id').get(taskController.showTask).patch(taskController.updateTask).delete(taskController.deleteTask);

module.exports = router;