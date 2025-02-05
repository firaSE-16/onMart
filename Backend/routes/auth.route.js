import express from 'express';
import { login, logout, signup, completeProfile } from '../controllers/auth.controller.js';
import { protectRoute} from '../middlewares/protectRoute.js'

const router = express.Router();

router.post('/signup',signup);

router.post('/login',login)

router.post('/logout',protectRoute,logout)

router.patch('/completeProfile',protectRoute,uploadFile.single('profilePic'),completeProfile)


export default router;


