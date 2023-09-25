import "/css/style.scss";
import { render, play, getDataSet } from "./functions.js";

const leftList = document.querySelector(".app__left__list");
const rightList = document.querySelector(".app__right__list");

const main = async () => {
  const dataSet = await getDataSet("birds");
  const leftArray = dataSet.slice(0, Math.floor(dataSet.length / 2));
  const rightArray = dataSet.slice(Math.floor(dataSet.length / 2));
  render(leftArray, leftList);
  render(rightArray, rightList);

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
};

main();
