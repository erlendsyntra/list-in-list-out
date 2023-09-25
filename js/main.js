import "/css/style.scss";
import { render, dataSetLeft, dataSetRight, play } from "./functions.js";

const leftArray = dataSetLeft;
const rightArray = dataSetRight;
const leftList = document.querySelector(".app__left__list");
const rightList = document.querySelector(".app__right__list");

const main = () => {
  render(leftArray, leftList);
  render(rightArray, rightList);
};

leftList.onclick = (e) => {
  leftArray.splice(leftArray.indexOf(e.target.innerHTML), 1);
  rightArray.push(e.target.innerHTML);
  play("audio-tic");
  render(leftArray, leftList);
  render(rightArray.sort(), rightList);
};

rightList.onclick = (e) => {
  rightArray.splice(rightArray.indexOf(e.target.innerHTML), 1);
  leftArray.push(e.target.innerHTML);
  play("audio-toc");
  render(rightArray, rightList);
  render(leftArray.sort(), leftList);
};

main();
