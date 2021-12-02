window.onload = function () {
  class Note {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
  }
  let addNote = document.getElementById("addNoteBtn");
  let noteTitleAdd = document.getElementById("noteTitleAdd");
  let noteContentAdd = document.getElementById("noteContentAdd");
  let noteTitle = document.getElementById("noteTitle");
  let noteContent = document.getElementById("noteContent");
  const notes = [];
  addNote.addEventListener("click", function () {
    notes.push(new Note(noteTitleAdd.value, noteContentAdd.value));
    console.log(notes);
    noteTitle.innerHTML += `<div class="noteListTitle"><i class="fa fa-trash"></i> ${noteTitleAdd.value}</div>`;
    noteList();
  });

  let noteListTitle = document.getElementsByClassName("noteListTitle");

  function noteList() {
    for (let i = 0; i < noteListTitle.length; i++) {
      noteListTitle[i].addEventListener("click", function () {
        noteContent.innerHTML = `<h3>${notes[i].title}</h3><p>${notes[i].content}</p>`;
      });
    }
  }
};
