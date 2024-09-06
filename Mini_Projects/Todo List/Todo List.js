let todoList = [];
let todoListSize = todoList.length;
let completeTask = [];
const taskList = document.getElementById('taskList');

function addTodo() {
  let inputElement = document.querySelector('#task_input');
  let todo_task = inputElement.value;
  if (todo_task === '' ){
    alert('You are not enter any Task details! Please Enter task details and try again')
  }
  else {
    todoList.push(todo_task);
    printTask(todo_task);
  }
  inputElement.value = '';
}

function printTask(todo_task) {
  let newtask = document.createElement("li");
  let newTaskHtml = `
  <div class="task_box">
    <input onclick="taskChecked_and_Unchecked()" class="checkbox" type="checkbox">
    <span id="taskPrint"></span>
    <Button onclick="deleteTask()" class="task_delete_button">Delete</Button>
  </div>`;
  taskList.appendChild(newtask);
  newtask.innerHTML =  newTaskHtml;
  newtask.querySelector('#taskPrint').innerText = todo_task;
}
function deleteTask() {
    let delete_task = document.querySelector(".task_box");
    delete_task.parentElement.remove();
}

function taskChecked_and_Unchecked(){
  let task_complete = document.querySelector("#taskPrint");
  task_complete.classList.toggle("task_checked");
}