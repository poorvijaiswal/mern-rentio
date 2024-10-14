import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Successfully Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000!!!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
//creating a middleware-a request handler manipulate requests and responses before they reach route handlers
app.use((err, req, res, next) => {                        //next -passing control to the next middleware function    
  const statusCode = err.statusCode || 500;              //here 500 is stautus code for 'Internal Server error'
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    sucess: false,
    message,
    statusCode,
  });
});
