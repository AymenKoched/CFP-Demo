import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Item, items, Status } from '../models';
import { createTaskRequest, updateTaskRequest } from '../requests';
import { ErrorResponse, TaskResponse } from '../responses';
import { formatZodErrors } from '../utils';

export const getTasks = (_req: Request, res: Response<TaskResponse[]>) => {
  res.json(items);
};

export const createTask = (
  req: Request,
  res: Response<TaskResponse | ErrorResponse>,
) => {
  const result = createTaskRequest.safeParse(
    typeof req.body === 'object' && req.body !== null ? req.body : {},
  );

  if (!result.success) {
    return res.status(400).json({
      errorMessage: 'Invalid task data',
      data: formatZodErrors(result.error.issues),
    });
  }

  const { title, description } = result.data;

  const newTask: Item = {
    id: uuidv4(),
    title,
    description,
    status: Status.Pending,
  };
  items.push(newTask);
  res.status(201).json(newTask);
};

export const deleteTask = (
  req: Request<{ id: string }>,
  res: Response<TaskResponse | ErrorResponse>,
) => {
  const { id } = req.params;
  const index = items.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({ errorMessage: 'Task not found.' });
  }

  const [deleted] = items.splice(index, 1);

  res.json(deleted);
};

export const updateTask = (
  req: Request<{ id: string }>,
  res: Response<TaskResponse | ErrorResponse>,
) => {
  const { id } = req.params;
  const task = items.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ errorMessage: 'Task not found.' });
  }

  const result = updateTaskRequest.safeParse(
    typeof req.body === 'object' && req.body !== null ? req.body : {},
  );

  if (!result.success) {
    return res.status(400).json({
      errorMessage: 'Invalid task data',
      data: formatZodErrors(result.error.issues),
    });
  }
  const { status } = result.data;

  task.status = status;
  res.json(task);
};
