const { updateItem } = require('./updateItem.js'); // Import the necessary dependencies

  describe('updateItem', () => {
  

    it('Testing Multiple strings in one variable', async () => {
      // Arrange
      const itemId = '01890b95-4ca2-cb31-c39a-9585dd798481';
      const item = 'aaaaaaaaa,aaaa , aaaaa';
      const quantity = '4';
      const recommendedLocation = 'aaaaaa, aaaa ,aaaa aaaaa';
      const timestampAdded = '2021-06-18T13:00:00Z';
      const timestampPurchased = '2021-06-18T13:00:00Z';
      const bought = true;
    
      // Act
      const result = await updateItem(
        itemId,
        item,
        quantity,
        recommendedLocation,
        timestampAdded,
        timestampPurchased,
        bought
      );
    
      // Assert
      expect(result.result._id).toBe(itemId);
      expect(result.result.item).toBe(item);
      expect(result.result.quantity).toBe(quantity);
      expect(result.result.bought).toBe(bought);
      expect(result.result.recommendedLocation).toBe(recommendedLocation);
    
      // Check if item string has more than one item separated by commas
      const itemItems = item.split(',');
      expect(itemItems.length).toBe(1);
    
      // Check if recommendedLocation string has more than one item separated by commas
      const locationItems = recommendedLocation.split(',');
      expect(locationItems.length).toBe(1);
    });
    

it('Testing emojis', async () => {
  // Arrange
  const itemId = '01890b95-4ca2-cb31-c39a-9585dd798481';
  const item = '😤';
  const quantity = '😤';
  const recommendedLocation = '😤'
  const timestampAdded = '2021-06-18T13:00:00Z'
  const timestampPurchased = '2021-06-18T13:00:00Z';
  const bought = true;

  // Act
  const result = await updateItem(
    itemId,
    item,
    quantity,
    recommendedLocation,
    timestampAdded,
    timestampPurchased,
    bought
  );


  expect(result.result.item).toMatch(/^[a-zA-Z\s,]+$/);
  expect(result.result.quantity).toMatch(/^[a-zA-Z\s,]+$/);
  expect(result.result.recommendedLocation).toMatch(/^[a-zA-Z\s,]+$/);
});

it('Testing Bought variable if it was a string instead of boolean', async () => {
  // Arrange
  const itemId = '01890b95-4ca2-cb31-c39a-9585dd798481';
  const item = 'aaaaaaaaa,aaaa , aaaaa';
  const quantity = '4';
  const recommendedLocation = 'aaaaaa, aaaa ,aaaa aaaaa';
  const timestampAdded = '2021-06-18T13:00:00Z';
  const timestampPurchased = '2021-06-18T13:00:00Z';
  const bought = "true";

  // Act
  const result = await updateItem(
    itemId,
    item,
    quantity,
    recommendedLocation,
    timestampAdded,
    timestampPurchased,
    bought
  );

  // Assert
  
  expect(result.result.bought).toBe(bought);


  expect(typeof result.result.bought).toBe(Boolean);

});

it('Test quantity for string value fails test for being a integer ', async () => {
  // Arrange
  const itemId = '01890b95-4ca2-cb31-c39a-9585dd798481';
  const item = 'aaaaaaaaa,aaaa , aaaaa';
  const quantity = 4;
  const recommendedLocation = 'aaaaaa, aaaa ,aaaa aaaaa';
  const timestampAdded = '2021-06-18T13:00:00Z';
  const timestampPurchased = '2021-06-18T13:00:00Z';
  const bought = "true";

  // Act
  const result = await updateItem(
    itemId,
    item,
    quantity,
    recommendedLocation,
    timestampAdded,
    timestampPurchased,
    bought
  );
  expect(result.result.quantity).toBe('string');
});

  it('Test quantity for negative values ', async () => {
    // Arrange
    const itemId = '01890b95-4ca2-cb31-c39a-9585dd798481';
    const item = 'aaaaaaaaa,aaaa , aaaaa';
    const quantity = -4;
    const recommendedLocation = 'aaaaaa, aaaa ,aaaa aaaaa';
    const timestampAdded = '2021-06-18T13:00:00Z';
    const timestampPurchased = '2021-06-18T13:00:00Z';
    const bought = true;
  
    // Act
    const result = await updateItem(
      itemId,
      item,
      quantity,
      recommendedLocation,
      timestampAdded,
      timestampPurchased,
      bought
    );

  // Assert

  
  const hasNegativeNumber = /-\d+/.test(quantity);
  expect(hasNegativeNumber).toBe(false);

}, 10000);


it('Testing string variables for exceeding character limit', async () => {
  // Arrange
  const itemId = '01890b95-4ca2-cb31-c39a-9585dd798481';
  const item = 'asdasdasdsdddzxczxczcz';
  const quantity = '101';
  const recommendedLocation = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const timestampAdded = '2021-06-18T13:00:00Z';
  const timestampPurchased = '2021-06-18T13:00:00Z';
  const bought = true;
  

  // Act
  const result = await updateItem(
    itemId,
    item,
    quantity,
    recommendedLocation,
    timestampAdded,
    timestampPurchased,
    bought
    
  );

  // Assert
  expect(result.result._id).toBe(itemId);
  expect(result.result.item).toBe(item);
  expect(result.result.quantity).toBe(quantity);
  expect(result.result.recommendedLocation).toBe(recommendedLocation);
  
  // Check if quantity exceeds character limit (e.g., 10 characters)
  const quantityLimit = 100;
  expect(quantity.length).toBeLessThanOrEqual(quantityLimit);
  

  // Check if item string exceeds character limit (e.g., 20 characters per item)
  const itemLimit = 20;
  const itemItems = item.split(',');
  expect(itemItems.every(item => item.trim().length <= itemLimit)).toBe(true);

  // Check if recommendedLocation string exceeds character limit (e.g., 25 characters per location)
  const locationLimit = 25;
  const locationItems = recommendedLocation.split(',');
  expect(locationItems.every(location => location.trim().length <= locationLimit)).toBe(true);
});

it('Testing if timestampAdded and purchased are proper format', async () => {
  // Arrange
  const itemId = '01890b95-4ca2-cb31-c39a-9585dd798481';
  const item = 'aaaaaaaaa,aaaa , aaaaa';
  const quantity = '4';
  const recommendedLocation = 'aaaaaa, aaaa ,aaaa aaaaa';
  const timestampAdded = '06-2012-18T13:00:00Z';
  const timestampPurchased = '04-2000-18T13:00:00Z';
  const bought = 'true';

  // Act
  const result = await updateItem(
    itemId,
    item,
    quantity,
    recommendedLocation,
    timestampAdded,
    timestampPurchased,
    bought
  );

  // Assert
 expect(result.result.timestampAdded).toBe(timestampAdded);
 expect(result.result.timestampPurchased).toBe(timestampPurchased);
  
  // Check if timestampAdded and timestampPurchased have valid formats
  const timestampFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
  expect(timestampFormat.test(timestampAdded)).toBe(true);
  expect(timestampFormat.test(timestampPurchased)).toBe(true);
}, 10000);

it('Testing invalid itemID', async () => {
  // Arrange
  const itemId = 'invalid-id';
  const item = 'aaaaaaaaa,aaaa , aaaaa';
  const quantity = '4';
  const recommendedLocation = 'aaaaaa, aaaa ,aaaa aaaaa';
  const timestampAdded = '2021-06-18T13:00:00Z';
  const timestampPurchased = '2021-06-18T13:00:00Z';
  const bought = 'true';

  // Act
  const result = await updateItem(
    itemId,
    item,
    quantity,
    recommendedLocation,
    timestampAdded,
    timestampPurchased,
    bought
  );

  // Assert
  expect(result.result._id).toBe(itemId);

  // Check if itemId is a valid UUID format
  const uuidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  expect(uuidFormat.test(itemId)).toBe(true);
});

});

