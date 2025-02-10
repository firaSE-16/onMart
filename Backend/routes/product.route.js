import express from 'express';
import { addProduct } from '../controllers/product.controller';

const router = express.Router();


router.post("/products", upload.array("images"), addProduct);



export default router;