import express from 'express';
import multer from 'multer';
import { login, logout, signup, completeProfile, updateProfile, googleSignup } from '../controllers/auth.controller.js';
import { protectRoute} from '../middlewares/protectRoute.js';
import passport from 'passport';

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); 

router.post('/signup', signup);

router.post('/login', login);

router.post('/google-signup', googleSignup);

router.post('/logout',protectRoute,logout)

router.patch('/completeProfile',protectRoute,upload.single('profilePic'),completeProfile)

router.patch('/updateProfile',protectRoute,upload.single('profilePic'),updateProfile)


router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'] 
}));


router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        
        res.redirect('http://localhost:3000/dashboard'); 
    }
);



export default router;


