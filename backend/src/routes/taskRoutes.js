import express from 'express';

const router = express.Router();

import taskController from './../controllers/taskController.js';

router.route('/').get(taskController.getTasks).post(taskController.createTask);

router
    .route('/:id')
    .get(taskController.getTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

export default router;
