import { NextFunction, Request, Response } from 'express';
import { BaseError, InternalServerError } from '../errors';

export const errorMiddleware = (
  err: BaseError | Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const error: BaseError = err instanceof BaseError ? err : new InternalServerError(err.message);
  res.status(error.status).json({ error: `[${error.constructor.name}]: ${error.message}` });
};
