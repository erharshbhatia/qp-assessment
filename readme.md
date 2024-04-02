Admin Endpoints:

Add Grocery Item

Method: POST
Endpoint: /api/admin/grocery-items
Description: Add a new grocery item to the system.
Request Body:
name: string (required) - Name of the grocery item.
price: number (required) - Price of the grocery item.
quantity: number (required) - Quantity of the grocery item.
Response:
Status: 201 Created
Body: Newly created grocery item object.

View Existing Grocery Items

Method: GET
Endpoint: /api/admin/grocery-items
Description: View a list of existing grocery items in the system.
Response:
Status: 200 OK
Body: Array of grocery item objects.

Remove Grocery Item

Method: DELETE
Endpoint: /api/admin/grocery-items/:id
Description: Remove a grocery item from the system.
Path Parameters:
id: string (required) - ID of the grocery item to be removed.
Response:
Status: 204 No Content

Update Grocery Item

Method: PUT
Endpoint: /api/admin/grocery-items/:id
Description: Update details (e.g., name, price, quantity) of an existing grocery item.
Path Parameters:
id: string (required) - ID of the grocery item to be updated.
Request Body:
name: string (optional) - Updated name of the grocery item.
price: number (optional) - Updated price of the grocery item.
quantity: number (optional) - Updated quantity of the grocery item.
Response:
Status: 200 OK
Body: Updated grocery item object.

Manage Inventory Levels

Method: PUT
Endpoint: /api/admin/grocery-items/:id/manage-inventory
Description: Manage inventory levels of a grocery item (increase/decrease quantity).
Path Parameters:
id: string (required) - ID of the grocery item to manage inventory for.
Request Body:
quantity: number (required) - Updated quantity of the grocery item.
Response:
Status: 200 OK
Body: Updated grocery item object.

User Endpoints:

View Available Grocery Items

Method: GET
Endpoint: /api/user/grocery-items
Description: View a list of available grocery items.
Response:
Status: 200 OK
Body: Array of grocery item objects.

Book Grocery Items

Method: POST
Endpoint: /api/user/grocery-items/book
Description: Book multiple grocery items in a single order.
Request Body:
items: Array<{ id: string, quantity: number }> (required) - Array of objects containing item IDs and quantities to book.
Response:
Status: 201 Created
Body: Confirmation message or booking details.