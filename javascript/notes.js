window.onload = function () {
  class Note {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
  }
  //hämtar alla relevanta variabler
  let addNote = document.getElementById("addNoteBtn");
  let noteTitleAdd = document.getElementById("noteTitleAdd");
  let noteContentAdd = document.getElementById("noteContentAdd");
  let noteTitle = document.getElementById("noteTitle");
  let noteContent = document.getElementById("noteContent");
  //skapar en array för noterna och pushar in klassobjekt dit
  const notes = [];

  addNote.addEventListener("click", function () {
    //if sats som kollar om det saknar titel eller content
    //fattas det kommer failmessage att synas
    if (noteTitleAdd.value == "" || noteContentAdd == "") {
      document.getElementById("failMessage").style.display = "block";
      document.getElementById("failMessage").innerHTML =
        "You need both titlel and content!";
    } else {
      //annars döljs failmessage
      //och pushar in klassobjektet i arrayen
      document.getElementById("failMessage").style.display = "none";
      notes.push(new Note(noteTitleAdd.value, noteContentAdd.value));
      //skriver ut titeln för noten på relevant ställe
      noteTitle.innerHTML += `<div class="noteListTitle"><i class="fa fa-trash"></i> ${noteTitleAdd.value}</div>`;
      //kalalr funktion som skriver ut content
      noteList();
    }
  });

  let noteListTitle = document.getElementsByClassName("noteListTitle");

  function noteList() {
    //loop som kolar genom alla titlar och varje titel får ett indexnummer
    for (let i = 0; i < noteListTitle.length; i++) {
      //använder samma indexnummer för att hämta från rätt klassobjekt (det med samma indexposition)
      noteListTitle[i].addEventListener("click", function () {
        noteContent.innerHTML = `<h3>${notes[i].title}</h3><p>${notes[i].content}</p>`;
      });
    }
  }
};
