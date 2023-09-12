import express from 'express';
import userController from '../controllers/userController'

const router = express.Router();

router.post('/signup',
  userController.signup,
  (req,res) => res.status(201));

router.post('/login',
  userController.login,
  (req, res) => res.status(200));

export default router;