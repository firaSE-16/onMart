import express from 'express';
import { protectRoute} from '../middlewares/protectRoute.js';
import { addCategory, deleteCategory, getAllCategories, updateCategory } from '../controllers/admin.controller.js';


const router = express.Router();


router.post('/addCategory',protectRoute,addCategory);



router.get('/getCategory',protectRoute, getAllCategories)


router.delete('/deleteCategory', protectRoute, deleteCategory)


router.put('/updateCategory', protectRoute, updateCategory)

export default router;