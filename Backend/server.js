import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  connectDB from './config/db.js';
import authRoutes from './routes/auth.route.js'
import adminRoutes from './routes/admin.route.js'
import vendorRoutes from './routes/vendor.route.js'

import passport from 'passport';


const app = express();
dotenv.config()
const PORT= process.env.PORT || 7000


app.use(express.json());
app.use(passport.initialize());

app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


app.use('/api/auth',authRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/vendor',vendorRoutes)











app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
    connectDB()
}
    
)