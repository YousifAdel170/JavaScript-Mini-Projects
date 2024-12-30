const switchButton = document.querySelector(".switch");
const bulb = document.querySelector(".bulb");

switchButton.addEventListener("click", () => {
  document.body.classList.toggle("on");
});
