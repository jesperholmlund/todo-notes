window.onload = function () {
  //hämtar innehållet i input för todo samt radioknapparna
  let todoTitle = document.getElementById("todoTitle");
  let prioRadios = document.getElementsByClassName("prioRadio");

  //lägger en klicklyssnare på knappen man lägger till en ny todo
  document.getElementById("addBtn").addEventListener("click", function () {
    //en loop för radio knapparna. hämtar ut alla tre
    for (let i = 0; i < prioRadios.length; i++) {
      //if sats för att kolla om innehållet på input är tre eller högre
      //lägre skrivs ett felmeddelande ut
      if (todoTitle.value.length < 3) {
        document.getElementById("failMessage").style.display = "block";
        document.getElementById("failMessage").innerHTML =
          "Too short. Most be at least 3 characters";
      } else {
        //om tre eller högre göms failmessage
        document.getElementById("failMessage").style.display = "none";
        //sen tre if satser som kollar vilken checkbox som är klickad
        //skriver då ut olika meddelande, low medium eller high
        //samt lägger till en klass med olika färger beroende på prioritet
        if (prioRadios[i].checked == true) {
          if (i === 0) {
            todoListBody.innerHTML += `<div class="todoItem"><div class="todoTitle"> ${todoTitle.value}</div>
          <div class="todoStatus"><div><i class="fa fa-circle prioBg-${i}"></i>
          Low priority</div>
            <i class="fa fa-trash fa-1x delBtn"></i> </div></div>
      `;
          }
          if (i === 1) {
            todoListBody.innerHTML += `<div class="todoItem"><div class="todoTitle"> ${todoTitle.value}</div>
          <div class="todoStatus"><div><i class="fa fa-circle prioBg-${i}"></i>
              Medium priority</div>
            <i class="fa fa-trash fa-1x delBtn"></i> </div></div>
      `;
          }
          if (i === 2) {
            todoListBody.innerHTML += `<div class="todoItem"><div class="todoTitle">${todoTitle.value}</div>
          <div class="todoStatus"><div><i class="fa fa-circle prioBg-${i}"></i>
              High priority</div>
            <i class="fa fa-trash fa-1x delBtn"></i> </div></div>
      `;
          }
        }
        //kallar en funktion som raderar
        deleteTodo();
      }
    }
  });
  function deleteTodo() {
    //hämtar rätt deleteknapp
    let deleteBtn = document.getElementsByClassName("delBtn");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", function () {
        //this pekar på delteknappen, sen hoppar den till två parent element och tar bort det
        this.parentNode.parentNode.remove();
      });
    }
  }
};
