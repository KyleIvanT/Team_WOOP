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
