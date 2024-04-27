import { connectToMongoDB } from '@database/db';
import errorMiddleware from '@middleware/error';
import { overrideResponseMiddleware } from '@middleware/overrideResponseMiddleware';
import router from '@routes/router';
import cors from 'cors';
import express from 'express';
import path from 'path';

// To add any new environment just add its env over config, and "ENVIRONMENT" variable over its package.json script
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: path.resolve(__dirname, `./config/.env.${process.env.ENVIRONMENT!}`) })

const app = express();
app.use(cors());

// Handling Uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

const startServer = async () => {
  try {
    await connectToMongoDB();

    app.use(express.json());
    app.use(overrideResponseMiddleware);
    app.use(router);
    app.use(errorMiddleware);
    
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    process.on('unhandledRejection', (err: Error) => {
      console.error(`Unhandled Promise Rejection: ${err.message}`);
      console.error('Shutting down the server due to Unhandled Promise Rejection');

      process.exit(1);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

startServer();

export default app;
