const form = document.getElementById("age-calculator");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const birthdayInput = document.getElementById("birthday").value;
  const birthdayInputTrimmed = birthdayInput.split("-");

  //   console.log(birthdayInput);
  //   console.log(birthdayInputTrimmed);

  const birthDay = birthdayInputTrimmed[0];
  const birthMonth = birthdayInputTrimmed[1] - 1;
  const birthYear = birthdayInputTrimmed[2];
  const today = new Date();
  //   console.log(today);
  const birthDate = new Date(birthYear, birthMonth, birthDay);

  const isValidDate = (date) => {
    return (
      Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
    );
  };

  if (!isValidDate(birthDate)) {
    alert("Invailed Date!!! Format is DD-MM-YYYY");
    return;
  }

  const ageInMilliseconds = today - birthDate;
  //   console.log(ageInMilliseconds);
  const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
  const ageInMinutes = Math.floor(ageInSeconds / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInWeeks = Math.floor(ageInDays / 7);
  const ageInMonths = Math.floor(ageInDays / 30);
  const ageInYear = Math.floor(ageInDays / 365.25);
  console.log(ageInYear);

  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  const result = document.getElementById("result");
  const paragraphs = document.querySelectorAll(".result-container .result p");
  const headingThrees = document.querySelectorAll(
    ".result-container .result h3"
  );
  if (paragraphs[0]) {
    for (let i = 0; i < 7; i++) {
      for (let i = 0; i < 7; i++) {
        switch (i) {
          case 0:
            headingThrees[i].textContent = "Age in Years: ";
            paragraphs[i].textContent = ageInYear;
            break;
          case 1:
            headingThrees[i].textContent = "Age in Months: ";
            paragraphs[i].textContent = ageInMonths;
            break;
          case 2:
            headingThrees[i].textContent = "Age in Weeks: ";
            paragraphs[i].textContent = ageInWeeks;
            break;
          case 3:
            headingThrees[i].textContent = "Age in Days: ";
            paragraphs[i].textContent = ageInDays;
            break;

          case 4:
            headingThrees[i].textContent = "Age in Hours: ";
            paragraphs[i].textContent = ageInHours;
            break;
          case 5:
            headingThrees[i].textContent = "Age in Minutes: ";
            paragraphs[i].textContent = ageInMinutes;
            break;
          case 6:
            headingThrees[i].textContent = "Age in Seconds: ";
            paragraphs[i].textContent = ageInSeconds;
            break;
        }
      }
    }
  } else {
    for (let i = 0; i < 7; i++) {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      const headingThree = document.createElement("h3");
      const paragraph = document.createElement("p");

      switch (i) {
        case 0:
          headingThree.textContent = "Age in Years: ";
          paragraph.textContent = ageInYear;
          break;
        case 1:
          headingThree.textContent = "Age in Months: ";
          paragraph.textContent = ageInMonths;
          break;
        case 2:
          headingThree.textContent = "Age in Weeks: ";
          paragraph.textContent = ageInWeeks;
          break;
        case 3:
          headingThree.textContent = "Age in Days: ";
          paragraph.textContent = ageInDays;
          break;

        case 4:
          headingThree.textContent = "Age in Hours: ";
          paragraph.textContent = ageInHours;
          break;
        case 5:
          headingThree.textContent = "Age in Minutes: ";
          paragraph.textContent = ageInMinutes;
          break;
        case 6:
          headingThree.textContent = "Age in Seconds: ";
          paragraph.textContent = ageInSeconds;
          break;
      }

      resultItem.appendChild(headingThree);
      resultItem.appendChild(paragraph);
      result.appendChild(resultItem);
    }
  }
});

const clearButton = document.getElementById("clear");
const resultContainer = document.getElementById("result-container");

// Clear button event
clearButton.addEventListener("click", () => {
  document.getElementById("birthday").value = ""; // Clear input field
  resultContainer.style.display = "none"; // Hide results container
  result.innerHTML = ""; // Clear result content
});
