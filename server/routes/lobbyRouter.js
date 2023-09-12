import express from 'express';
import lobbyController from '../controllers/lobbyController'

const router = express.Router();

router.post('/signup',
  userController.signup,
  (req,res) => res.status(201));

router.post('/login',
  userController.login,
  (req, res) => res.status(200));

export default router;