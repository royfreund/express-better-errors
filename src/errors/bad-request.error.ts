import { BaseError } from './base.error';
import { StatusCodes } from 'http-status-codes';

export class BadRequestError extends BaseError {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}
