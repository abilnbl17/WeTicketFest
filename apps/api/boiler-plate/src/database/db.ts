import mongoose from 'mongoose';

let isConnected = false;

const connectToMongoDB = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  const mongodbUri = process.env.MONGODB_URI;

  if (!mongodbUri) {
    console.error('MongoDB_URI is not defined in the .env file');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongodbUri);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export { connectToMongoDB, mongoose };
