import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    
    
    apiUrl: 'https://prffvvgcza.execute-api.us-west-2.amazonaws.com/graphql/',
    websocketUrl: 'wss://jlqebn4p1e.execute-api.us-west-2.amazonaws.com/graphql',
    apiKey: 'J57X45S3yx5j4yVGzo1AV3HRKiD7u6xrjW4z64g4cN2n', // <---- API key
});

async function measureExecutionTime(fn) {
    const startTime = Date.now();
    await fn();
    const endTime = Date.now();
    const executionTime = endTime - startTime;
    console.log(`Execution time: ${executionTime}ms`);
  }
  const { entities } = client



async function Search(itemId) {
    const searchResponse = await entities.shoppingList.get({
      _id: itemId
    }
      
    );

    return searchResponse;
  }
  

  module.exports = {
    Search
  };
 