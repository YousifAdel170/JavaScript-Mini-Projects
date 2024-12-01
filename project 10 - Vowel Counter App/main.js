const counterButton = document.getElementById("counter-button");
const textarea = document.getElementById("data");
const p = document.getElementById("result");
const vowels = ["a", "e", "i", "o", "u"];

counterButton.addEventListener("click", () => {
  if (textarea.value !== "") {
    let counter = 0;
    Array.from(textarea.value).forEach((character) => {
      if (vowels.includes(character)) counter++;
    });

    const alreadySpan = document.querySelector("span");
    if (alreadySpan) {
      alreadySpan.textContent = counter;
    } else {
      const span = document.createElement("span");
      span.textContent = counter;
      p.appendChild(span);
    }
  } else alert("There is no text to check!!!");
});
