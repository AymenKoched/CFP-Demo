import { z } from 'zod';

export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: Status;
};

export enum Status {
  Pending = 'pending',
  Done = 'done',
}

export type TaskPayload = {
  title: string;
  description: string;
};

export const taskSchema = z.object({
  title: z
    .string({ message: 'Title is invalid' })
    .min(1, { message: 'Title is required' }),
  description: z
    .string({ message: 'Description is invalid' })
    .min(1, { message: 'Description is required' }),
});
