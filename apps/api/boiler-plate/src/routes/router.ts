import ErrorHandler from '@utility/ErrorHandler';
import express from 'express';
import testRoutes from '@routes/testRoutes';

const router = express.Router();

// email routes
router.use('/test', testRoutes);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'App is up and running!' });
});

router.use((req, res) => {
  throw new ErrorHandler('No such end-point exists.', 404);
});

export default router;
