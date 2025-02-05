import express from 'express';
import { protectRoute} from '../middlewares/protectRoute.js';
import { addCategory } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/addCategory',protectRoute,addCategory);

export default router;