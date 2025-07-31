import { z } from 'zod';

import { Status } from '../models';

export const updateTaskRequest = z.object({
  status: z.enum([Status.Pending, Status.Done], { error: 'Status is invalid' }),
});
