const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomColor()];
  }
  color.textContent = hexColor;
  body.style.backgroundColor = hexColor;
});

function getRandomColor() {
  return Math.floor(Math.random() * hex.length);
}
