// src/controllers/userController.ts
import { Request, Response } from 'express';
import { GroceryService } from '../services/groceryService';

const groceryService = new GroceryService();

export const viewAvailableGroceryItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const availableItems = await groceryService.getAllAvailableGroceryItems();
    res.json({ message: 'Available grocery items retrieved', data: availableItems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const bookGroceryItems = async (req: Request, res: Response): Promise<void> => {
  const { items } = req.body;
  try {
    const bookedItems = await Promise.all(items.map(async (item: { id: string, quantity: number }) => {
      const { id, quantity } = item;
      return await groceryService.manageInventory(id, -quantity);
    }));
    res.json({ message: 'Grocery items booked successfully', data: bookedItems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
