import { BaseError } from './base.error';
import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(StatusCodes.NOT_FOUND, message);
  }
}
