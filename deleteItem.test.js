const { deleteItem } = require('./deleteItem.js'); // Import the necessary dependencies

describe('deleteItem', () => {
  it('should delete an item successfully', async () => {
    // Arrange
    const itemId = '018908b8-e1bd-746d-accc-98ce1d156cb1';

    // Act
    await deleteItem(itemId);

    // Assert
    // Verify that the item is deleted correctly, such as checking if the item no longer exists in the database
    // Add assertions to check the result of the deletion operation
  }, 10000);

  it('should throw an error for invalid item ID format', async () => {
    // Arrange
    const itemId = 'invalid-id'; // Invalid item ID format

    // Act
    await expect(itemId)
    .rejects.toThrow("invalid ID.");
  });

  it('should throw an error when attempting to delete a non-existing item', async () => {
    // Arrange
    const itemId = 'non-existing-item-id';
  
    // Act
    await expect(itemId)
    .rejects.toThrow("this is a non-existing-item-id.");
  });

 
  
  it('should throw an error for empty item ID', async () => {
    // Arrange
    const itemId = '';
  
    // Act
    await expect(itemId)
    .rejects.toThrow("Empty-ID.");
  });

  it('should throw an error for null item ID', async () => {
    // Arrange
    const itemId = null;
  
    // Act
    await expect(itemId)
    .rejects.toThrow("Null item for ID.");
  });
  
  it('should throw an error for invalid item ID data type', async () => {
    // Arrange
    const itemId = true; // Invalid item ID data type (boolean)
  
    // Act
    await expect(itemId)
    .rejects.toThrow("Invalid ID Type.");
  });

  it('should throw an error when attempting to delete an already deleted item', async () => {
    // Arrange
    const itemId = '018908b8-e1bd-746d-accc-98ce1d156cb1';
  
    // Create a test item in the database with the known item ID
   
  
    // Delete the item
    await deleteItem(itemId);
  
    // Act
    await expect(itemId)
    .rejects.toThrow("Item already deleted.");
  }, 10000);
  
  

});
