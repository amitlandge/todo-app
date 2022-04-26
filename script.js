console.log("Todo App");
let todo_text=document.querySelector(".todo_text");
let form_container=document.querySelector(".form_container");
console.log(form_container);
const toggle_text=document.querySelector(".toggle_text");
const todo=document.querySelector(".todo")
form_container.addEventListener("submit",function (e) {
    e.preventDefault();
  const create_text=document.createElement("li");
  create_text.innerHTML=todo_text.value;
  todo.appendChild(create_text);
  create_text.addEventListener("click",function () {
      create_text.classList.toggle("completed");
  })
  create_text.addEventListener("contextmenu",function (e) {
      e.preventDefault()
      create_text.remove();
  })
  todo_text.value=" ";
 
})

// todo.addEventListener("click",function () {
//     console.log("clicked by user");
//     todo.classList.toggle("completed")
// })
