const getDataSet = async (type) => {
  if (type === "birds") {
    const response = await fetch("http://ap-examen.surge.sh/vogels.json");
    const data = await response.json();
    console.log(data.map((el) => el.latijnse_benaming));
    return data.map((el) => el.latijnse_benaming);
  } else {
    const response = await new Promise((res) =>
      res([
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
      ])
    );
    console.log(response);
    return response;
  }
};

getDataSet("food");
