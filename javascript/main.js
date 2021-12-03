window.onload = function () {
  let todoTitle = document.getElementById("todoTitle");
  let prioRadios = document.getElementsByClassName("prioRadio");

  document.getElementById("addBtn").addEventListener("click", function () {
    numb = 0;
    for (let i = 0; i < prioRadios.length; i++) {
      if (todoTitle.value.length < 3) {
        document.getElementById("failMessage").style.display = "block";
        document.getElementById("failMessage").innerHTML =
          "Too short. Most be at least 3 characters";
      } else {
        document.getElementById("failMessage").style.display = "none";
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
        deleteTodo();
      }
    }
  });
  function deleteTodo() {
    let deleteBtn = document.getElementsByClassName("delBtn");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", function () {
        this.parentNode.parentNode.remove();
      });
    }
  }
};
