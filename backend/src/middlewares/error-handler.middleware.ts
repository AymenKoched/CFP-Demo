import { NextFunction, Request, Response } from 'express';

import { ErrorResponse } from '../responses';

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction,
) => {
  console.error(err);
  res.status(err.status || 500).json({
    errorMessage: err.message || 'Internal Server Error',
  });
};
