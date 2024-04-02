import { Request, Response } from 'express';
import { GroceryService } from '../services/groceryService';

const groceryService = new GroceryService();

export const addGroceryItem = async (req: Request, res: Response): Promise<void> => {
  const { name, price, quantity } = req.body;
  try {
    const newItem = await groceryService.addGroceryItem(name, price, quantity);
    res.json({ message: 'Grocery item added', data: newItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const viewGroceryItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await groceryService.getAllGroceryItems();
    res.json({ message: 'Grocery items retrieved', data: items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeGroceryItem = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await groceryService.removeGroceryItem(id);
    res.json({ message: 'Grocery item removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateGroceryItem = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const updatedItem = await groceryService.updateGroceryItem(id, name, price);
    res.json({ message: 'Grocery item updated', data: updatedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const manageInventory = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const updatedItem = await groceryService.manageInventory(id, quantity);
    res.json({ message: 'Inventory managed', data: updatedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
