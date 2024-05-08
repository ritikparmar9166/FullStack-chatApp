import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.contorollers.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

//using middleware to find the id of the sender by checking the user is logged in or not.
router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage) 

export default router;