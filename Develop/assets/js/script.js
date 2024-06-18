let taskList = [];
// Retrieve tasks and nextId from localStorage
localStorage.getItem("tasks") === null
    ? console.log("No tasks yet")
    : console.log(localStorage.getItem("tasks"));

localStorage.getItem("nextId") === null
    ? localStorage.setItem("nextId", 0)
    // : nextId = JSON.parse(localStorage.getItem("nextId"));
    : nextId = localStorage.getItem("nextId");

const newTaskTitleEl = document.getElementById("newTaskTitle");
const newTaskDetailsEl = document.getElementById("newTaskDetails");
const newTaskDueDateEl = document.getElementById("newTaskDueDate");
const newTaskStatusEl = document.getElementById("newTaskStatus");
const taskSubmitBtn = document.getElementById("taskSubmit");

let newTaskItem = {
    id: nextId,
    title: newTaskTitleEl.value,
    details: newTaskDetailsEl.value,
    due: newTaskDueDateEl.value,
    status: newTaskStatusEl.value
};

const myForm = document.getElementById("myForm");

// DONE: create a function to generate a unique task id
function generateTaskId() {
    nextId++;
    localStorage.setItem("nextId", nextId);
    return nextId;
}
const composeTask = () => {
    generateTaskId();
    handleAddTask();
}

// IN PROGRESS: create a function to handle adding a new task
function handleAddTask() {
    newTaskItem;
    newTaskItem = {
        id: nextId,
        title: newTaskTitleEl.value,
        details: newTaskDetailsEl.value,
        due: newTaskDueDateEl.value,
        status: newTaskStatusEl.value
    };
    createTaskCard(newTaskItem);
    taskList.push(newTaskItem);
    JSON.stringify(taskList);
    localStorage.setItem("tasks", taskList);

}



// 99% DONE: create a function to create a task card
function createTaskCard(task) {
    const todoCards = document.getElementById("todo-cards");
    // HTML injection
    const card = `
                <div class="card" id="taskCard${task.id}">
                  <div class="card-header h5">
                    ${task.title}
                  </div>
                  <div class="card-body">
                    <h6 class="card-title">${task.details}</h6>
                    <p class="card-text">${task.due}</p>
                    <a href="#" class="btn btn-danger" id="deleteTaskBtn">Delete</a>
                  </div>
                </div>`
    todoCards.innerHTML += card;
    const deleteTaskBtn = document.querySelectorAll("#deleteTaskBtn");
    deleteTaskBtn.addEventListener("click", handleDeleteTask);
}

// Todo: create a function to render the task list and make cards draggable
// pull tasks from location
// add current tasks
// make cards draggable: jquery widget -- UI interactions
function renderTaskList() {
    //make columns & cards appear from localStorage
    // taskList = JSON.parse(localStorage.getItem("tasks"));
 // `${task.status}` still exists
}

// TODO: create a function to handle deleting a task
function handleDeleteTask(event) {
    //delete card by ID taskCard${task.id}
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) { // handle MOVE
    //update status of task
 // `${task.status}` still exists
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
    taskSubmitBtn.addEventListener("click", composeTask);
    const deleteTaskBtn = document.querySelectorAll("#deleteTaskBtn");
    deleteTaskBtn.addEventListener("click", handleDeleteTask);
});

dayjs().format()
