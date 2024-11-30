import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db();
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};
