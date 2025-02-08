import express from 'express';
import {  addOrder, deleteOrder,getOrder,  updateOrder } from '../controllers/order.controller';
import { protectRoute } from '../middlewares/protectRoute';

const router = express.Router();

router.post('/addOrder',protectRoute,addOrder);

router.patch('/updateOrder',protectRoute,updateOrder);

router.delete('/deleteOrder',protectRoute,deleteOrder);

router.get('/getOrder',protectRoute,getOrder);



export default router;