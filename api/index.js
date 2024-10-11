import express from 'express';
import authRouter from './routes/authRouter.route.js';
const app = express();
app.use(epxress.jason());
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000!!!');
});

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