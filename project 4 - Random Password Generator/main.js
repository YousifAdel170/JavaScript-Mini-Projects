const range = document.getElementById("input-slider");
const sliderValue = document.getElementById("slider-value");

const password = document.getElementById("password");

const lowercaseElement = document.getElementById("lowercase");
const uppercaseElement = document.getElementById("uppercase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");

const generateButton = document.getElementById("get-button");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=[]{}|;:'\",.<>?/~`";

const copy = document.getElementById("copy");

range.addEventListener("input", () => (sliderValue.textContent = range.value));

generateButton.addEventListener("click", () => {
  const length = range.value;
  //   const length = document.getElementById("slider-value").textContent;
  console.log(length);
  let allSelectedCharacters = "";
  let randomPassword = "";

  allSelectedCharacters += lowercaseElement.checked ? lowercaseLetters : "";
  allSelectedCharacters += uppercaseElement.checked ? uppercaseLetters : "";
  allSelectedCharacters += numbersElement.checked ? numbers : "";
  allSelectedCharacters += symbolsElement.checked ? symbols : "";

  for (let i = 0; i < length; i++)
    randomPassword += allSelectedCharacters.charAt(
      Math.floor(Math.random() * allSelectedCharacters.length)
    );

  console.log(randomPassword);
  password.value = randomPassword;
});

copy.addEventListener("click", () => {
  if (password.value != "") {
    navigator.clipboard.writeText(password.value);
    copy.innerHTML = "check";
    setTimeout(() => {
      copy.innerHTML = "content_copy";
      password.value = "";
    }, 3000);
  }
});
