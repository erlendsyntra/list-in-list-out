import "/css/style.scss";
import { render } from "./functions.js";

const leftArray = [
  "Apple",
  "Banana",
  "Cheese",
  "Dateonut",
  "Egg",
  "Fig",
  "Grapefruit",
  "Hazelnut",
  "Ice",
  "Kiwi",
];
const rightArray = [
  "Lemon",
  "Mango",
  "Nuts",
  "Orange",
  "Pizza",
  "Quiche",
  "Rice",
  "Strawberry",
  "Tomato",
  "Watermelon",
];
const leftList = document.querySelector(".app__left__list");
const rightList = document.querySelector(".app__right__list");

const main = () => {
  render(leftArray, leftList);
  render(rightArray, rightList);
};

main();
