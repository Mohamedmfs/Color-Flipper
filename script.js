const span = document.querySelector(".color");
const button = document.querySelector("#btn");

const changeColor = () => {
  const randomColors = "#" + Math.floor(Math.random() * 16777215).toString(16);
  span.innerHTML = randomColors;
  document.body.style.backgroundColor = randomColors;
};

button.addEventListener("click", changeColor);
