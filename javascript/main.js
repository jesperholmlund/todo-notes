window.onload = function () {
  // class Todo {
  //   constructor(title, status) {
  //     this.title = title;
  //     this.status = status;
  //   }
  // }
  // const todos = [];
  // const todoListBody = document.getElementById("todoListBody");
  // todos.push(new Todo("Lorem ipsum", "ongoing"));
  // for (let i = 0; i < todos.length; i++) {
  //   todoListBody.innerHTML = `<div class="todoTitle"><i class="fa fa-trash"></i> ${todos[i].title}</div>
  //       <div class="todoStatus">${todos[i].status}</div>
  //   `;
  // }

  let todoTitle = document.getElementById("todoTitle");
  let prioRadios = document.getElementsByClassName("prioRadio");

  document.getElementById("addBtn").addEventListener("click", function () {
    numb = 0;
    for (let i = 0; i < prioRadios.length; i++) {
      if (todoTitle.value.length < 3) {
        todoTitle.value = "";
        todoTitle.placeholder = "Too short :(";
      } else {
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
