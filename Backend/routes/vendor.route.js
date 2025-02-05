import express from "express";
import { addVendor } from "../controllers/vendor.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();

router.post('/addVendor',protectRoute, addVendor)

export default router;