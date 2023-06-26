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

async function add() {
  await measureExecutionTime(async () => {
      // Add a new "product" with syncMode
      const addResponse = await entities.shoppingList.add(
          {
              item: 'TEST',
              quantity: '1',
              recommendedLocation: "Walmart",
              bought: true,
              timestampAdded: "2023-06-18T13:00:00Z",
              timestampPurchased: "2023-06-19T14:00:00Z"
          }, { syncMode: "ASYNC" }
      );
  });
}

//LIST ITEMS IN ENTITY
async function listItems() {
  await measureExecutionTime(async () => {
      const itemResponse = await entities.shoppingList.list();
      console.log(itemResponse);
  });
}


 
//SEARCHES ITEM BY ID from VENDIA WEBSITE Node ONE SHopping LIST tag == _id
async function search() {
  await measureExecutionTime(async () => {
      const searchResponse = await entities.shoppingList.get('0188e559-df85-73ec-e6f3-b9a5ced574ac');
      console.log(searchResponse);
  });
}

//UPDATES AN ITEM IN THE SHOPPING LIST // CAN"T GET IT TO WORK dont understand 
//USING everything from https://www.vendia.com/docs/share/vendia-client-sdk

async function updateItem() {
  await measureExecutionTime(async () => {
    const ItemUpdate = await entities.shoppingList.update({
    _id:'0188e9fa-2111-9105-d792-b6d89bbd4906',
    item: "TEST",
    quantity: "10000",
    recommendedLocation: "Amazon",
    bought: false

    })
    // Handle the update response here
  });
}

//DELETES ITEM BY _ID
async function deleteItem() {
  await measureExecutionTime(async () => {
      const deleteResponse = await entities.shoppingList.remove("0188e513-5e02-827e-b810-1631e2b3e960");
  });
}



//BELOW ARE THE FUNCTIONS TO DO ABOVE uncomment any of them to use if you want to see it work go onto VEndia entity explorer and choose an _id and paste it above to any of the places where it requires an ID 
//Search and list fucntion shows in the terminal,  delete removes it from the entity explorer, update will update the entity exporer still working on it 
//--------------------------//
//console.log("add")
//add();
//console.log("Search")
//search();
updateItem();
//deleteItem();
//updateItem();
//listItems();
