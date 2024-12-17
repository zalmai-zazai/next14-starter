import mongoose from 'mongoose';

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose.set('strictQuery', false);
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
    throw new error('Erorr connecting to DB');
  }
};
