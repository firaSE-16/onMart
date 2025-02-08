import express from 'express';
import { protectRoute} from '../middlewares/protectRoute.js';
import { addCart, deleteCart, getCart, updateCart } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/addCart',protectRoute,addCart);

router.patch('/updateCart',protectRoute,updateCart);

router.delete('/deleteCart',protectRoute,deleteCart);

router.get('/getCart',protectRoute,getCart);


export default router;