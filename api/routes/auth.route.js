import express from 'express';
import { google, signOut, signin, signup, resetPassword } from '../controllers/auth.controller.js'; // Adjust the import path as needed

const router = express.Router();

// Authentication routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut);

// Password reset route
router.post('/reset-password', resetPassword);

export default router;
