import { Request, Response, NextFunction, RequestHandler } from 'express';

const asyncMiddleware =
  (reqFunction: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(reqFunction(req, res, next)).catch(next);
  };

export default asyncMiddleware;
