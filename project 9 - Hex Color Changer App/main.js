const hexButton = document.getElementById("generate-hex");
hexButton.addEventListener("click", updateColor);

function randomizeColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++)
    color += letters[Math.floor(Math.random() * letters.split("").length)];
  return color;
}

function updateColor() {
  const colorBox = document.getElementById("color-box");
  const colorText = document.getElementById("color-text");
  let color = randomizeColor();
  colorBox.style.backgroundColor = color;
  colorText.textContent = color;
}
