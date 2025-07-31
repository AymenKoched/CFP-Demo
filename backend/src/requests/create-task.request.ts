import { z } from 'zod';

export const createTaskRequest = z.object({
  title: z
    .string({ error: 'Title is invalid' })
    .min(1, { error: 'Title is required' }),
  description: z
    .string({ error: 'Description is invalid' })
    .min(1, { error: 'Description is required' }),
});
