import mongoose from "mongoose";
import User from '../models/User.model.js'
import bcrypt from 'bcryptjs';  
import {generateToken,generatelogoutToken} from '../utils/generateToken.js';
import cloudinary from "../config/Cloudinary.js";
import fs from 'fs';
import emailValidator from 'email-validator';
import axios from 'axios';


const verifyEmailExists = async (email) => {
    try {
        const response = await axios.get(`https://api.zerobounce.net/v2/validate?api_key=${process.env.ZEROBOUNCE_API_KEY}&email=${email}`);
        return response.data.status === "valid"; 
    } catch (error) {
        console.error('Error in email verification:', error);
        return false; 
    }
};


export const signup = async (req, res) => {
    try {
        const { name, email, password,role } = req.body;

        
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

    
        if (!emailValidator.validate(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

       
        const isRealEmail = await verifyEmailExists(email);
        if (!isRealEmail) {
            return res.status(400).json({ message: 'Email does not exist' });
        }

   
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already in use' });
        }

       
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
     
        user = new User({
            name,
            email,
            password: hashedPassword,
        });

        user.role= role||user.role

      
        await user.save();

        
        const token = generateToken(user); 

        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        });
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error in signup:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        if (!emailValidator.validate(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

       
        const isRealEmail = await verifyEmailExists(email);
        if (!isRealEmail) {
            return res.status(400).json({ message: 'Email does not exist' });
        }
        
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user);

        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        });

        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};


export const googleSignup = async (req, res) => {
    try {
        const { googleId, name, email } = req.body;

        if (!googleId || !email) {
            return res.status(400).json({ message: 'Google authentication failed' });
        }

        let user = await User.findOne({ email });

        if (user) {
            if (!user.googleId) {
                user.googleId = googleId; 
                await user.save();
            }
        } else {
            user = new User({
                name,
                email,
                googleId,
            });
            await user.save();
        }

        const token = generateToken(user);
        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        });

        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const logout = async (req, res) =>{
    const token = generatelogoutToken(req.user)
    return res.status(200).json(token)

}

export const completeProfile = async (req, res) => {
    try {
        const { phone, contact } = req.body;

   
        let profilePic = null;

        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
                folder: 'profile_images', 
                resource_type: 'image',
            });

            profilePic = cloudinaryResponse.secure_url; 


            fs.unlinkSync(req.file.path);
        }

     
        if (contact && !Array.isArray(contact)) {
            return res.status(400).json({ message: 'Contact should be an array' });
        }

       
        const user = await User.findOne({ _id: req.user._id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (contact) {
            user.contact.push(...contact);
        }

  
        user.phone = phone || user.phone;
        user.profilePic = profilePic || user.profilePic;


        await user.save();

        return res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { name,email,password,role,phone, contact } = req.body;

        let profilePic = null;

        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
                folder: 'profile_images', 
                resource_type: 'image',
            });

            profilePic = cloudinaryResponse.secure_url; 


            fs.unlinkSync(req.file.path);
        }

        
        if (!contact && !Array.isArray(contact)) {
            return res.status(400).json({ message: 'Contact should be an array' });
        }

        const user = await User.findOne({ _id: req.user._id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(contact);

        if(contact){
            user.contact=contact|| user.contact;
        }

        
        user.name = name || user.name;  
        user.email = email || user.email;  
        user.role = role || user.role;  
        user.phone = phone || user.phone;  
  
        user.profilePic = profilePic || user.profilePic;  
        
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        

        user.password = hashPassword ||user.password;




        await user.save();

        return res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

