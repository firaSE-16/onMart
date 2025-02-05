import jwt from 'jsonwebtoken'
import User from '../models/User.model.js'
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

export const generateToken = (newUser)=>{
    const token = jwt.sign({id:newUser._id,role:newUser.role},JWT_SECRET,{expiresIn:'7d'})
    return token
}

export const generatelogoutToken = (newUser)=>{
    const token = jwt.sign({id:newUser._id,role:newUser.role},JWT_SECRET,{expiresIn:'0hr'})
    return token
}
