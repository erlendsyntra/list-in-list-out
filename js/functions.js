export const render = (array, list) => {
  list.innerHTML = array.map((el) => `<li>${el}</li>`).join("");
};
