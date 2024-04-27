import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Wallet document
export interface TestDocument extends Document {
  testKey: string;
}

// Create a Mongoose schema for the Wallet
const walletSchema = new Schema<TestDocument>({
  testKey: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create a Mongoose model for the Wallet
const Test = mongoose.model<TestDocument>('test', walletSchema);

export default Test;
