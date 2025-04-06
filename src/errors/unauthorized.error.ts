import { BaseError } from './base.error';
import { StatusCodes } from 'http-status-codes';

export class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(StatusCodes.UNAUTHORIZED, message);
  }
}
