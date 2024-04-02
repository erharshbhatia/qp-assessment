import express from 'express';
import { viewAvailableGroceryItems, bookGroceryItems } from '../controllers/userController';
import { isUser } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/grocery-items', isUser,viewAvailableGroceryItems);

router.post('/grocery-items/book', isUser, bookGroceryItems);

export default router;
