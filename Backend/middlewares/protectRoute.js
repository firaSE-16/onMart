import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.model.js';

dotenv.config()
export const protectRoute = async (req, res, next) => {
    
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({message:'Token is not provided'})
    
    }
    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded){
        return res.status(401).json({message:'Token is invalid'})
    }

    const {id,role} = decoded

    const user = await User.findOne({ _id: id }).select('-password');


    if(!user){
        return res.status(401).json({message:'User not found'})
    }
    req.user = user
    
    next()


}