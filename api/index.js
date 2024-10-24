import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Successfully Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000!!!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/listing', listingRouter);
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
