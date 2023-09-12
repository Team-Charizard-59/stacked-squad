import express from 'express';
import userController from '../controllers/userController.js';


const router = express.Router();

router.post('/signup',
  userController.createUser,
  (_,res) => res.status(201));

// router.post('/login',
//   userController.login,
//   (req, res) => res.status(200));

export default router;