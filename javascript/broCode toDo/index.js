const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//adding task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");

    li.addEventListener("click", completeTask);
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";

    saveTaskToLocalStorage();
  }
}

//complete task

function completeTask() {
  const task = event.target;
  task.classList.toggle("completed");
}

//deleteTask

function deleteTask() {
  const task = event.target.parentElement;
  taskList.removeChild(task);
}

function saveTaskToLocalStorage() {
  const tasks = [];
  const taskItems = taskList.getElementsByTagName("li");

  for (i = 0; i < taskItems.length; i++) {
    tasks.push(taskItems[i].textContent);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach((taskText) => {
      const li = document.createElement("li");
      li.textContent = taskText;
    });
  }
}
