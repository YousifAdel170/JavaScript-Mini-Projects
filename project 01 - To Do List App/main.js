const listContainer = document.getElementById("list-container");
const input = document.getElementById("input-box");
showTask();

function addTask() {
  if (input.value === "") alert("Enter Your Task!!!");
  else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveTask();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
});

function saveTask() {
  localStorage.setItem("Tasks", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("Tasks");
}
