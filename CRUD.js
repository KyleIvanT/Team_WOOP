import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    
     apiUrl: 'https://prffvvgcza.execute-api.us-west-2.amazonaws.com/graphql/',
     websocketUrl: 'wss://jlqebn4p1e.execute-api.us-west-2.amazonaws.com/graphql',
     apiKey: 'J57X45S3yx5j4yVGzo1AV3HRKiD7u6xrjW4z64g4cN2n', // <---- API key
    
});

const { entities } = client
async function add(){
    // Add a new "product"
const addResponse = await entities.shoppingList.add({
    item: 'Television',
    quantity: '1',
    recommendedLocation: "Walmart",
    bought: true,
    timestampAdded: "2023-06-18T13:00:00Z",
    timestampPurchased: "2023-06-19T14:00:00Z"
    
})
};
//LIST ITEMS IN ENTITY
async function listItems(){

    const itemResponse = await entities.shoppingList.list()
    console.log(itemResponse);
}


 
//SEARCHES ITEM BY ID from VENDIA WEBSITE Node ONE SHopping LIST tag == _id
async function search(){
    const SearchResponse = await entities.shoppingList.get('0188e529-d14b-0849-9200-b2843773d72f')
    console.log(SearchResponse);
  }


//UPDATES AN ITEM IN THE SHOPPING LIST // CAN"T GET IT TO WORK dont understand 
//USING everything from https://www.vendia.com/docs/share/vendia-client-sdk
async function updateItem(){
  const updateResponse = await entities.shoppingList.update({
    _id: shoppingList.id,
    item: 'REMOTE',
    quantity: '55',
    recommendedLocation: "TEST",
    bought: false,
    timestampAdded: "2023-06-18T13:00:00Z",
    timestampPurchased: "2023-06-19T14:00:00Z"
  }) 
  const items = await entities.shoppingList.get("0188e529-d14b-0849-9200-b2843773d72f")
  shoppingList.list = shoppingList.list - 1
  const updateItemResponse = await entities.shoppingList.update(items)
}
//DELETES ITEM BY _ID
async function deleteItem()
{
    const deleteResponse = await entities.shoppingList.remove("0188e513-5e02-827e-b810-1631e2b3e960")
}

  
  


//BELOW ARE THE FUNCTIONS TO DO ABOVE uncomment any of them to use if you want to see it work go onto VEndia entity explorer and choose an _id and paste it above to any of the places where it requires an ID 
//Search and list fucntion shows in the terminal,  delete removes it from the entity explorer, update will update the entity exporer still working on it 
//--------------------------//
//add();
//updateItem();
//deleteItem();
//updateItem();
//listItems();
//search();