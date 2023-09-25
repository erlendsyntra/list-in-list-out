export const render = (array, list) => {
  list.innerHTML = array.map((el) => `<li>${el}</li>`).join("");
};

export const play = (id) => {
  var audio = document.querySelector(`#${id}`);
  audio.play();
};

export const getDataSet = async (type) => {
  if (type === "birds") {
    const response = await fetch("http://ap-examen.surge.sh/vogels.json");
    const data = await response.json();
    return data.map((el) => el.latijnse_benaming);
  } else {
    return [
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
  }
};
