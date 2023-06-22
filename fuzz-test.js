import { createVendiaClient } from "@vendia/client";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} //gives a random integer for quantity

function getRandomBool() { //gives either true or false for bought 
  return Math.random() < 0.5;
}

function getRandomTimestamp() {
  const start = new Date(2022, 1, 1);
  const end = new Date(2023, 12, 31);
  const randomTimestamp = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomTimestamp.toISOString();
} //gives a date for timestampAdded or Purchased

function getRandomItem() {
  const items = ["Apple", "Banana", "Orange", "Mango", "Strawberry", " ", 4];
  const randomIndex = getRandomInt(0, items.length - 1);
  return items[randomIndex];
} //gives a random item for item

function getRandomLocation() {
  const locations = ["Walmart", "Target", "Grocery Store", "Supermarket"];
  const randomIndex = getRandomInt(0, locations.length - 1);
  return locations[randomIndex];
}

async function fuzzAdd() {
  const client = createVendiaClient({
    apiUrl: 'https://prffvvgcza.execute-api.us-west-2.amazonaws.com/graphql/',
    websocketUrl: 'wss://jlqebn4p1e.execute-api.us-west-2.amazonaws.com/graphql',
    apiKey: 'J57X45S3yx5j4yVGzo1AV3HRKiD7u6xrjW4z64g4cN2n', // <---- API key
  });

  const item = getRandomItem();
  const quantity = String(getRandomInt(1, 10));
  const recommendedLocation = getRandomLocation();
  const bought = getRandomBool();
  const timestampAdded = getRandomTimestamp();
  let timestampPurchased = " ";
  if(bought)
  {
    timestampPurchased = getRandomTimestamp();
  }else {
    timestampPurchased = timestampAdded;
  }
}

try{

if(item === ""){
  throw new Error("Invalid item"); //fail test if item is empty
}
if(recommendedLocation === ""){
  throw new Error("Invalid location");
}
  
  const addResponse = await client.entities.shoppingList.add({
    item,
    quantity,
    recommendedLocation,
    bought,
    timestampAdded,
    timestampPurchased,
  });
  
  console.log("Succesfully added item:", addResponse);
  return true;
} catch (error){
  console.error("Error adding item:", error);
  console.error("Error adding location:", error);
  return false;
  }
}
  
