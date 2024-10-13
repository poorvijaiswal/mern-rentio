import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/authRouter.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Successfully Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

const app = express();

app.use(epxress.json());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000!!!');
});

app.use('/api/user', userRouter);
app.use('/api/auth',authRouter);
app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message  || 'Internal Server Error';
  return res.status(statusCode),json({
    sucess:false,
    statusCode,
    message,
  });
});
