import express from 'express';
import userController from '../controllers/userController.js';
import authController from '../controllers/authController.js'
import sessionController from '../controllers/sessionController.js';
import cookieController from '../controllers/cookiesController.js';

const router = express.Router();

router.post(
  '/signup', 
  userController.createUser, 
  sessionController.startSession, 
  cookieController.setSSIDCookie, 
  (_, res) =>  {
    return res.redirect(301, 'http://localhost:5173/');
  });

router.post(
  '/login',
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (_, res) => {
    return res.redirect(301, 'http://localhost:5173/')
  });
//   (req, res) => res.status(200));

router.post(
  '/logout',
  sessionController.endSession,
  cookieController.deleteCookie,
  (_, res) => {
    return res.redirect(301, '/login')
  }
)

export default router;