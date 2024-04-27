import { NextFunction, Request, Response } from 'express';

export const overrideResponseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Store the original `res.json` method
  const originalJson = res.json;

  // Override `res.json`
  res.json = function (body: any) {
    // Call the original `res.json` with the modified body
    return originalJson.call(this, {
      status: res.statusCode,
      success: true,
      ...body,
    });
  };

  next();
};
