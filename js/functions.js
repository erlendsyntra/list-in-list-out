export const render = (array, list) => {
  list.innerHTML = array.map((el) => `<li>${el}</li>`).join("");
};

export const dataSetLeft = [
  "Apple",
  "Cheese",
  "Egg",
  "Grapefruit",
  "Hazelnut",
  "Kiwi",
  "Mango",
  "Orange",
  "Quiche",
  "Strawberry",
];

export const dataSetRight = [
  "Banana",
  "Doughnut",
  "Fig",
  "Ice",
  "Lemon",
  "Nuts",
  "Pizza",
  "Rice",
  "Tomato",
  "Watermelon",
];
