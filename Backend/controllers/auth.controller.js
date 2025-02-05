import mongoose from "mongoose";
import User from '../models/User.model.js'
import bcrypt from 'bcryptjs';  
import {generateToken,generatelogoutToken} from '../utils/generateToken.js';

export const signup = async (req, res) =>{
    const {name, email, password, role} = req.body

    if(!name || !email || !password){
        return res.status(400).json({message:'All fields are required'})
    }
    if((password.length < 6)){
        return res.status(400).json({message:'Password should be at least 6 characters long'})
    }
    const matchEmail = await User.findOne({email:email})
    if(matchEmail){
        return res.status(400).json({message:'Email already exists'})
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)
    
    const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        role
    })
    
    await newUser.save()
    const token = await generateToken(newUser)
    return res.status(200).json(token)


}

export const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        
        const userWithoutPassword = await User.findOne({ email: email }).select('-password');

        
        const token = generateToken(userWithoutPassword);

        return res.status(200).json({ token });
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
        const profilePic = req.file?.path; 

        
        if (!Array.isArray(contact)) {
            return res.status(400).json({ message: 'Contact should be an array' });
        }

        const user = await User.findOne({ _id: req.user._id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        
        user.phone = phone || user.phone;  
        user.contact = contact || user.contact;  
        user.profilePic = profilePic || user.profilePic;  
      

        await user.save();

        return res.status(200).json({ message: 'Profile completed' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { name,email,password,role,phone, contact } = req.body;
        const profilePic = req.file?.path; 

        
        if (!Array.isArray(contact)) {
            return res.status(400).json({ message: 'Contact should be an array' });
        }

        const user = await User.findOne({ _id: req.user._id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        
        user.name = name || user.name;  
        user.email = email || user.email;  
        user.role = role || user.role;  
        user.phone = phone || user.phone;  
        user.contact = contact || user.contact;  
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

