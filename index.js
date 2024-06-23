let addbutton = document.getElementById("add-btn");
let inputbox = document.getElementById("inputbox");
let todolist = document.getElementById("todo-list");

addbutton.addEventListener("click", () => {
  if (inputbox.value === "") {
    alert("Please add a task...");
  } else {
    createTodo(inputbox.value);
  }

  inputbox.value = "";
});
function createTodo(todoText) {
  let li = document.createElement("li");
  li.innerHTML = `<div class="Lists">
    <span>${todoText}</span>
    <div class="buttons">
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
    </div>
    </div>`;

  let deletebtn = li.querySelector(".delete-btn");
  deletebtn.addEventListener("click", () => {
    li.remove();
  });

  let editbtn = li.querySelector(".edit-btn");
  editbtn.addEventListener("click", () => {
    let currentText = li.querySelector("span").textContent;

    inputbox.value = currentText;

    li.remove();

    //  editbtn.textContent = "Save";

    //  editbtn.addEventListener("click", ()=> {
    //     let updatedText = inputbox.value;
    //     currentText = updatedText;

    //     editbtn.textContent = "Edit";

    //  });
  });

  todolist.appendChild(li);
}
