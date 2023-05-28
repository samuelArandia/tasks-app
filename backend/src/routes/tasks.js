import { Router } from 'express';
import { deleteTasks, getCount, getTask, getTasks, updateTask, saveTask } from '../controllers/tasks';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoints
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all tasks
 *    tags: [Tasks]
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get total tasks counter 
 *    tags: [Tasks]
 */
router.get('/tasks/count', getCount);

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get task by id
 *    tags: [Tasks]
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: save a new task
 *    tags: [Tasks]
 */
router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *    summary: Delete a task by id
 *    tags: [Tasks]
 * 
 */
router.delete('/tasks/:id', deleteTasks);

/**
 * @swagger
 * /tasks:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 */
router.put('/tasks/:id', updateTask);

export default router;
