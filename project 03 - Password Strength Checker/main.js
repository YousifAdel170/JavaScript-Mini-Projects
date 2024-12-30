const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const toggleButton = document.querySelector("button");
const eyePassword = document.querySelector("button img");

password.addEventListener("input", () => {
  if (password.value.length === 0) strength.textContent = "";
  else if (password.value.length < 6) strength.textContent = "Weak";
  else if (password.value.length < 10) strength.textContent = "Medium";
  else if (password.value.length > 15) strength.textContent = "Strong";

  message.style.display = "block";
});

toggleButton.addEventListener("click", () => {
  const passwordType = password.getAttribute("type");
  if (passwordType === "password") {
    password.setAttribute("type", "text");
    eyePassword.src = "./imgs/show.png";
  } else {
    password.setAttribute("type", "password");
    eyePassword.src = "./imgs/unshow.png";
  }
});
