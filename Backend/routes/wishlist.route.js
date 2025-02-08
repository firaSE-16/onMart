import express from 'express';
import { protectRoute} from '../middlewares/protectRoute.js';
import { addWishlist, deleteWishlist, getWishlist, updateWishlist } from '../controllers/order.controller.js';

const router = express.Router();


router.post('/addCart',protectRoute,addWishlist);

router.patch('/updateCart',protectRoute,updateWishlist);

router.delete('/deleteCart',protectRoute,deleteWishlist);

router.get('/getCart',protectRoute,getWishlist);

export default router;