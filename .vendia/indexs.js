const { createVendiaClient } = require('@vendia/client');

const client = createVendiaClient({
  apiUrl: 'https://prffvvgcza.execute-api.us-west-2.amazonaws.com/graphql/',
  websocketUrl: 'wss://jlqebn4p1e.execute-api.us-west-2.amazonaws.com/graphql',
  apiKey: 'FnrHMNU8pg4rDB2QLnd2ZnQdL2vULVncQqgvtfWvVrHk', // <---- API key
});

