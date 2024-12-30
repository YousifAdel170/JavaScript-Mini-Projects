const addButton = document.getElementById("add-button");
const main = document.querySelector(".main");

addButton.addEventListener("click", addNote);

function addNote() {
  const note = document.createElement("div");
  note.classList.add("note");

  const tool = document.createElement("div");
  tool.classList.add("tool");

  const iSave = document.createElement("i");
  iSave.classList.add("fas");
  iSave.classList.add("save");
  iSave.classList.add("fa-save");

  const iTrash = document.createElement("i");
  iTrash.classList.add("fas");
  iTrash.classList.add("fa-trash");
  iTrash.classList.add("trash");

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Enter Your Note";

  tool.appendChild(iSave);
  tool.appendChild(iTrash);

  note.appendChild(tool);
  note.appendChild(textarea);

  main.appendChild(note);

  const save = note.querySelector(".save");
  const trash = note.querySelector(".trash");
  const noteTextarea = note.querySelector("textarea");
  save.addEventListener("click", saveNote);
  noteTextarea.addEventListener("input", saveNote);
  trash.addEventListener("click", () => {
    note.remove();
    saveNote();
  });
}

function saveNote() {
  const allTextereas = document.querySelectorAll(".note textarea");
  const data = Array.from(allTextereas).map((data) => data.value);
  //   console.log(allTextereas, data);
  //   console.log(JSON.stringify(data));

  if (data.length === 0) localStorage.removeItem("notes");
  else localStorage.setItem("notes", JSON.stringify(data));
}

function loadNote() {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  //   console.log(lsNotes);
  if (lsNotes != null) {
    lsNotes.forEach((element) => {
      addNote();
      const allTextereas = document.querySelectorAll(".note textarea");
      const lastNote = allTextereas[allTextereas.length - 1];
      lastNote.value = element;
    });
  }
}
loadNote();
