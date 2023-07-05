const { Search } = require('./Search.js'); 

describe('Search', () => {
  
  it('should handle invalid API URL', async () => {
    const apiURL = 'https://prffvvgcza.execute-api.us-west-2.amazonaws.com/graphql/';
  
    await expect(async () => {
      await Search(apiURL);
    }).rejects.toThrow();
  }, 10000);
  

  it('should handle invalid WebSocket URL', async () => {
    const websocketUrl = 'wss://jlqebn4p1e.execute-api.us-west-2.amazonaws.com/graphqlS';
   
    await expect(async () => {
      await Search(websocketUrl);
    }).rejects.toThrow();
  }, 10000);

 

  it('should handle network timeout', async () => {
    
    await expect(Search()).rejects.toThrowError('Network timeout');
   
  });

  it('handle invalid shopping list ID', async () => {
    const itemId = "invalid";
    
    const result = await Search(
      itemId
    );

    expect(result._id).toBe(itemId);
    const uuidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    expect(uuidFormat.test(itemId)).toBe(true);
   
  }, 10000);



});
