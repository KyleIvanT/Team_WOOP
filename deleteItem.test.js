const { deleteItem } = require('./deleteItem.js'); // Import the necessary dependencies

describe('deleteItem', () => {

  it('should throw an error for invalid item ID format', async () => {
    // Arrange
    const itemId = 'invalid-id'; // Invalid item ID format


    const result = await deleteItem(
      itemId
    );
    // Act
    expect(result.itemId).toBe(itemId);

    // Check if itemId is a valid UUID format
    const uuidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    expect(uuidFormat.test(itemId)).toBe(true);
  }, 10000);

  /*it('should throw an error when attempting to delete a non-existing item', async () => {
    // Arrange
    const itemId = 'non-existing-item-id'; 
  
    // Act
    await expect(itemId)
    .rejects.toThrow("this is a non-existing-item-id.");
  }, 10000);*/

 
  
  it('should throw an error for empty item ID', async () => {
    // Arrange
    const itemId = " ";
  
    const result = await deleteItem(
      itemId
    );
    // Act
    expect(result.itemId.trim()).not.toBe(" ");

  }, 10000);

  it('should throw an error for null item ID', async () => {
    // Arrange
    const itemId = null;
  
    // Act
    const result = await deleteItem(
      itemId
    );

    expect(result.itemId).toBe(itemId);
    expect(typeof result.itemId).toBe('string');

  }, 10000);
  
  
  it('should throw an error for invalid item ID data type', async () => {
    // Arrange
    const itemId = true; // Invalid item ID data type (boolean)
  
    // Act & Assert
    expect(itemId).toBe("01890b95-4ca2-cb31-c39a-9585dd798481");
  }, 10000);
  

  it('should throw an error when attempting to delete an already deleted item', async () => {
    // Arrange
    const itemId = '01890b95-4b20-1ec8-7b1c-b7ac2d130c38';
  
    // Create a test item in the database with the known item ID
   
  
    // Delete the item
    await deleteItem(itemId);
  
    // Act
    await expect(itemId)
    .rejects.toThrow("Item already deleted.");
  }, 10000); 
  
  

});
