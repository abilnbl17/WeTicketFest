class ErrorHandler extends Error {
  statusCode: number;
  stackTrace: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.stackTrace = this.stack || '';

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
