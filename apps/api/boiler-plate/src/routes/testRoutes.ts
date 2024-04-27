import express from 'express';
const router = express.Router();

import testController from '@controllers/testController';

router.get('/', testController);

export default router;
