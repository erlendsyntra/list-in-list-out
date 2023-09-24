import "/css/style.scss";
import { render } from "./functions.js";

const leftArray = [
  "Apple",
  "Banana",
  "Cheese",
  "Doughnut",
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

leftList.onclick = (e) => {
  leftArray.splice(leftArray.indexOf(e.target.innerHTML), 1);
  rightArray.push(e.target.innerHTML);
  render(leftArray, leftList);
  render(rightArray, rightList);
};

rightList.onclick = (e) => {
  rightArray.splice(rightArray.indexOf(e.target.innerHTML), 1);
  leftArray.push(e.target.innerHTML);
  render(rightArray, rightList);
  render(leftArray, leftList);
};

main();
