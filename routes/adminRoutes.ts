// src/routes/adminRoutes.ts
import { Router } from 'express';
import { addGroceryItem, viewGroceryItems, removeGroceryItem, updateGroceryItem, manageInventory } from '../controllers/adminController';
import { isAdmin } from '../middleware/authMiddleware';

const router = Router();

router.post('/grocery-items', isAdmin, addGroceryItem);

router.get('/grocery-items', isAdmin, viewGroceryItems);

router.delete('/grocery-items/:id', isAdmin, removeGroceryItem);

router.put('/grocery-items/:id', isAdmin, updateGroceryItem);

router.put('/grocery-items/:id/inventory', isAdmin, manageInventory);

export default router;
