const { Search } = require('./Search.js'); // Replace 'your-module' with the actual module path

describe('Search', () => {
  it('should handle invalid API URL', async () => {
    // Arrange
    
    
    // Act and Assert
    await expect(Search()).rejects.toThrowError(' invalid API URL');
    
  }, 10000);

  it('should handle invalid WebSocket URL', async () => {
    
    await expect(Search()).rejects.toThrowError(' invalid Websocket URL');
    
  }, 10000);


  it('should handle invalid shopping list ID', async () => {
    // Arrange
    // Pass an invalid shopping list ID to the entities.shoppingList.get method
    
    // Act and Assert
    await expect(Search()).rejects.toThrowError(Error);
   
  }, 10000);

  it('should handle network timeout', async () => {
    // Arrange
    // Introduce a delay or timeout in the entities.shoppingList.get method
    
    // Act and Assert
    await expect(Search()).rejects.toThrowError('Network timeout');
   
  });



});
