import { Request, Response, NextFunction } from 'express';
import asyncMiddleware from '@middleware/asyncMiddleware';

const testController = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    result: { message: 'ok' },
  });
});

export default testController;
