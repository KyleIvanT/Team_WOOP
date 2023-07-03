const { updateItem } = require('./updateItem.js'); // Import the necessary dependencies

  describe('updateItem', () => {
  

 it('Testing Multiple strings in one variable', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = 'aaaaaaaaa,aaaa , aaaaa';
    const quantity = '4';
    const recommendedLocation = 'aaaaaa, aaaa ,aaaa aaaaa'
    const timestampAdded = '2021-06-18T13:00:00Z'
    const timestampPurchased = '2021-06-18T13:00:00Z';
    const bought = false;
  
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
    expect(result).toEqual({
      result: {
        _id: itemId,
        _owner: 'NodeOne',
        bought: false,
        item: 'Apple',
        quantity: '2',
        recommendedLocation: 'Walmart',
        timestampAdded: '2022-06-18T13:00:00Z',
        timestampPurchased: '2021-06-18T13:00:00Z',
      },
      transaction: {
        _id: itemId,
        _owner: 'NodeOne',
        submissionTime: expect.any(String),
        transactionId: expect.any(String),
        version: '1.0.0',
      },
  });

   expect(result.result.quantity).toBe('2');
   expect(result.result.item).toBe('Apple');
   expect(result.result.recommendedLocation).toBe('Walmart');
  
});
  

   // });
      
      
  /* it('should throw an error for invalid item', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = ' ';
    const quantity = '6';
    const recommendedLocation = 'Walmart';
    const timestampAdded = '2022-06-18T13:00:00Z';
    const timestampPurchased = '2021-06-18T13:00:00Z';
    const bought = false;
  
    try {
      // Act
      await updateItem(
        itemId,
        item,
        quantity,
        recommendedLocation,
        timestampAdded,
        timestampPurchased,
        bought
      );
  
      // If the updateItem function does not throw an error, fail the test
      fail('Expected updateItem to throw an error');
    } catch (error) {
      // Assert
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Item, quantity, or recommended location cannot be empty.');
    }
  }); 
  
  
  

  /*it('should throw an error for item with emoji', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = "";
    const quantity = "";
    const recommendedLocation = "";
    const timestampAdded = "2022-06-18T13:00:00Z";
    const timestampPurchased = "2021-06-18T13:00:00Z";
    const bought = false;

    // Act
     // Act and Assert
     try {
        console.log("Calling updateItem...");
        await updateItem(itemId, item, quantity, recommendedLocation, timestampAdded, timestampPurchased, bought);
        console.log("updateItem completed without throwing an error.");
      } catch (error) {
        console.log("Caught an error:", error);
        expect(error.message).toBe("Item, quantity, or recommended location cannot be emoji.");
      }


  });
  it('should throw an error for item, quantity, or recommended location with multiple strings', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = "Apple Orange Banana";
    const quantity = "33";
    const recommendedLocation = "Walmart Target";
    const timestampAdded = "2022-06-18T13:00:00Z";
    const timestampPurchased = "2021-06-18T13:00:00Z";
    const bought = false;
  
    // Act
    // Act and Assert
    try {
        console.log("Calling updateItem...");
        await updateItem(itemId, item, quantity, recommendedLocation, timestampAdded, timestampPurchased, bought);
        console.log("updateItem completed without throwing an error.");
      } catch (error) {
        console.log("Caught an error:", error);
        expect(error.message).toBe("Item, quantity, or recommended location cannot be multiple strings.");
      }
    });

  it('should throw an error for item, quantity, or recommended location exceeding the maximum length', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ipsum ac est consectetur";
    const quantity = "3";
    const recommendedLocation = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ipsum ac est consectetur";
    const timestampAdded = "2022-06-18T13:00:00Z";
    const timestampPurchased = "2021-06-18T13:00:00Z";
    const bought = false;
  
    // Act
    // Act and Assert
    try {
        console.log("Calling updateItem...");
        await updateItem(itemId, item, quantity, recommendedLocation, timestampAdded, timestampPurchased, bought);
        console.log("updateItem completed without throwing an error.");
      } catch (error) {
        console.log("Caught an error:", error);
        expect(error.message).toBe("Item, quantity, or recommended location cannot exceed maximum string length.");
      }
    });
  
  it('should throw an error for invalid timestamp format', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = "apples";
    const quantity = "3";
    const recommendedLocation = "Walmart";
    const timestampAdded = "2022-06-18T13:00:00Z";
    const timestampPurchased = "2021/06/18 13:00:00"; // Invalid timestamp format
    const bought = false;
    

    // Act and Assert
    try {
        console.log("Calling updateItem...");
        await updateItem(itemId, item, quantity, recommendedLocation, timestampAdded, timestampPurchased, bought);
        console.log("updateItem completed without throwing an error.");
      } catch (error) {
        console.log("Caught an error:", error);
        expect(error.message).toBe("timestamp is invalid");
      }
    });
  
  it('should throw an error for invalid boolean input', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = "apples";
    const quantity = "3";
    const recommendedLocation = "Walmart";
    const timestampAdded = "2022-06-18T13:00:00Z";
    const timestampPurchased = "2021-06-18T13:00:00Z";
    const bought = "true"; // Invalid boolean input (string instead of boolean)
  
     // Act and Assert
     try {
        console.log("Calling updateItem...");
        await updateItem(itemId, item, quantity, recommendedLocation, timestampAdded, timestampPurchased, bought);
        console.log("updateItem completed without throwing an error.");
      } catch (error) {
        console.log("Caught an error:", error);
        expect(error.message).toBe("bought must be boolean input.");
      }
    });
  
  it('should throw an error for invalid item ID format', async () => {
    // Arrange
    const itemId = 'invalid-id'; // Invalid item ID format
    const item = "apples";
    const quantity = "3";
    const recommendedLocation = "Walmart";
    const timestampAdded = "2022-06-18T13:00:00Z";
    const timestampPurchased = "2021-06-18T13:00:00Z";
    const bought = false;
  
    // Act
  // Act and Assert
  try {
    console.log("Calling updateItem...");
    await updateItem(itemId, item, quantity, recommendedLocation, timestampAdded, timestampPurchased, bought);
    console.log("updateItem completed without throwing an error.");
  } catch (error) {
    console.log("Caught an error:", error);
    expect(error.message).toBe("invalid ID format");
  }
});
  
  it('should update an item successfully without optional inputs', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = "apples";
    const quantity = "3";
    const recommendedLocation = "Walmart";
    const timestampAdded = "2022-06-18T13:00:00Z";
  
    // Act
    // Act and Assert
    try {
        console.log("Calling updateItem...");
        await updateItem(itemId, item, quantity, recommendedLocation, timestampAdded);
        console.log("updateItem completed without throwing an error.");
      } catch (error) {
        console.log("Caught an error:", error);
        expect(error.message).toBe("updated item without optional inputs.");
      }
    });
  
  it('should throw an error if timestampPurchased is earlier than timestampAdded', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = "apples";
    const quantity = "3";
    const recommendedLocation = "Walmart";
    const timestampAdded = "2022-06-18T13:00:00Z";
    const timestampPurchased = "2021-06-18T13:00:00Z"; // Earlier timestamp than timestampAdded
    const bought = false;
  
     // Act and Assert
     try {
        console.log("Calling updateItem...");
        await updateItem(itemId, item, quantity, recommendedLocation, timestampAdded, timestampPurchased, bought);
        console.log("updateItem completed without throwing an error.");
      } catch (error) {
        console.log("Caught an error:", error);
        expect(error.message).toBe("timestampPurchased is earlier than timestampAdded.");
      }
    });
});
  
  
  it('should throw an error for negative quantity', async () => {
    // Arrange
    const itemId = '01890989-deca-f475-08c5-4e60b5bc57ba';
    const item = "apples";
    const quantity = -3; // Negative quantity
    const recommendedLocation = "Walmart";
    const timestampAdded = "2022-06-18T13:00:00Z";
    const timestampPurchased = "2021-06-18T13:00:00Z";
    const bought = false;
  
    // Act and Assert
     // Act and Assert
     try {
        console.log("Calling updateItem...");
        await updateItem(itemId, item, quantity, recommendedLocation, timestampAdded, timestampPurchased, bought);
        console.log("updateItem completed without throwing an error.");
      } catch (error) {
        console.log("Caught an error:", error);
        expect(error.message).toBe("quantity cannot be negative.");
      } */
    
});
  

