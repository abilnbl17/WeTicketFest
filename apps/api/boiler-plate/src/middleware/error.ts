import { Request, Response } from 'express';

export default (err: any, req: Request, res: Response) => {
  console.log('error middleware: ', err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message;
  err.stackTrace = err.stackTrace || null;

  res.status(err.statusCode).json({
    success: false,
    name: err.name,
    message: err.message,
    stackTrace: err.stackTrace,
  });
};
