const colors = ["purple", "red", "rgba(133,122,200)", "blue", "green"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
