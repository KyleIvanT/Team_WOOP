const { createVendiaClient } = require('@vendia/client');

const client = createVendiaClient({
  apiUrl: 'https://prffvvgcza.execute-api.us-west-2.amazonaws.com/graphql/',
  websocketUrl: 'wss://jlqebn4p1e.execute-api.us-west-2.amazonaws.com/graphql',
  apiKey: 'FnrHMNU8pg4rDB2QLnd2ZnQdL2vULVncQqgvtfWvVrHk', // <---- API key
});

// Requesting a subset of fields on the Vendia Block type
const listBlocksQuery = `
  query listBlocks {
    listVendia_BlockItems {
      Vendia_BlockItems {
        blockId
      }
      nextToken
    }
  }
`
const response = await client.request(listBlocksQuery)

// Returns the full GraphQL "data" response
console.log(response?.listVendia_BlockItems?.Vendia_BlockItems?.[0]?.blockId)