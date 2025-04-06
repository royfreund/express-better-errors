export abstract class BaseError extends Error {
  protected constructor(
    public status: number,
    public message: string,
  ) {
    super(message);
  }
}
