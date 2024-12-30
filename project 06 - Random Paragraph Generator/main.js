const paragraphs = [
  "A warm cup of coffee in the morning can set the tone for the entire day. The rich aroma and the first sip often feel like a comforting embrace.",
  "Space exploration has always been a fascination for humanity. The idea of discovering life beyond Earth or colonizing other planets ignites the imagination.",
  "Books hold the power to transport us to other worlds. A gripping story can make hours feel like minutes, leaving us yearning for more.",
  "The sound of rain on a tin roof can be surprisingly soothing. It’s a reminder of nature's rhythms, a simple yet profound backdrop to quiet moments.",
  "Traveling to new places opens the door to diverse cultures and traditions. Tasting unfamiliar cuisines and meeting locals can be eye-opening experiences.",
  "The ocean’s vastness is both humbling and awe-inspiring. Watching waves crash against the shore is a reminder of nature’s raw power.",
  "Music has a way of touching the soul. Whether it’s a classical symphony or a catchy pop tune, it speaks to emotions words often cannot express.",
  "Innovation in renewable energy is reshaping our planet's future. Solar panels, wind turbines, and hydroelectric plants are helping reduce our carbon footprint.",
  "Friendship is a cornerstone of life. True friends are there for laughter in good times and a shoulder to lean on during hardships.",
  "The mysteries of the deep sea remain largely unexplored. Scientists believe that countless species yet undiscovered lurk in the ocean’s depths.",
  "A walk in the park can clear the mind and refresh the spirit. The simplicity of nature has a way of grounding us amidst life's chaos.",
  "The history of human civilization is a story of triumphs and struggles. From ancient empires to modern democracies, each chapter has shaped the world we know today.",
  "The gentle flicker of a candle can create a calming ambiance. Its soft light has been a symbol of warmth and hope for centuries.",
  "Learning to cook a new recipe can be an adventure. Mixing ingredients, experimenting with spices, and savoring the result is deeply satisfying.",
  "Wildlife photography requires patience and precision. Capturing a rare moment in nature can be both challenging and exhilarating.",
  "Urban architecture tells the story of a city’s evolution. From towering skyscrapers to historic landmarks, every structure has a tale to tell.",
  "The night sky is a canvas of infinite possibilities. Gazing at the stars often inspires dreams, reminding us of our place in the universe.",
  "A garden filled with blooming flowers is a feast for the senses. Their vibrant colors and delicate fragrances create a magical atmosphere.",
  "The digital age has connected people like never before. Social media, video calls, and instant messaging bring loved ones closer despite the miles.",
  "Sports teach valuable lessons about teamwork, perseverance, and discipline. Whether played for fun or professionally, they unite people from all walks of life.",
];

const itemInput = document.getElementById("items");
const container = document.getElementById("data");

function randomize(array) {
  let arrayLength = array.length;
  let randomIndex;
  while (arrayLength != 0) {
    randomIndex = Math.floor(Math.random() * arrayLength);
    arrayLength--;
    [array[randomIndex], array[arrayLength]] = [
      array[arrayLength],
      array[randomIndex],
    ];
  }
  return array;
}

function generate() {
  if (itemInput.value == 0) alert("The value can't be zero");
  else if (itemInput.value > paragraphs.length)
    alert(`The maximum length is ${paragraphs.length}`);
  else {
    const randomParagraphs = paragraphs;
    randomize(paragraphs);
    const selectedParagraphs = randomParagraphs.slice(0, itemInput.value);
    selectedParagraphs.forEach((paragraph) => {
      const p = document.createElement("p");
      p.innerHTML = paragraph;
      container.appendChild(p);
    });
  }
  itemInput.value = "";
}

const clearButton = document.querySelector(".row .clear");

clearButton.addEventListener("click", () => {
  const paragraphs = document.querySelectorAll(".row p");
  if (paragraphs[0]) {
    itemInput.value = "";
    paragraphs[0].parentElement.innerHTML = "";
  } else alert("This is already Empty.");
});
