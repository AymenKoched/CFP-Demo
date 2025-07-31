import { Router } from 'express';

import { createTask, deleteTask, getTasks, updateTask } from '../controllers';

const router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

export const taskRouter = router;
