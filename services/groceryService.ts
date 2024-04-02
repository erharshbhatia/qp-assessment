import pool from '../db/index';

interface GroceryItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export class GroceryService {
  public async addGroceryItem(name: string, price: number, quantity: number): Promise<GroceryItem> {
    const query = 'INSERT INTO grocery_items(name, price, quantity) VALUES($1, $2, $3) RETURNING *';
    const values: string[] = [name, price.toString(), quantity.toString()];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  public async getAllGroceryItems(): Promise<GroceryItem[]> {
    const query = 'SELECT * FROM grocery_items';
    const result = await pool.query(query);
    return result.rows;
  }

  public async removeGroceryItem(id: string): Promise<void> {
    const query = 'DELETE FROM grocery_items WHERE id = $1';
    await pool.query(query, [id]);
  }

  public async updateGroceryItem(id: string, name: string, price: number): Promise<GroceryItem | undefined> {
    const query = 'UPDATE grocery_items SET name = $1, price = $2 WHERE id = $3 RETURNING *';
    const values: string[] = [name, price.toString(), id];
    const result = await pool.query(query, values);
    return result.rows[0] || undefined;
  }

  public async manageInventory(id: string, quantity: number): Promise<GroceryItem | undefined> {
    const query = 'UPDATE grocery_items SET quantity = $1 WHERE id = $2 RETURNING *';
    const values = [quantity.toString(), id];
    const result = await pool.query(query, values);
    return result.rows[0] || undefined;
  }
  

  public async getAllAvailableGroceryItems(): Promise < GroceryItem[] > {
  const query = 'SELECT * FROM grocery_items WHERE quantity > 0';
  const result = await pool.query(query);
  return result.rows;
}
}