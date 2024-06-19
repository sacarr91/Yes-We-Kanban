let tasksArr = [];
// Retrieve tasks and nextId from localStorage
localStorage.getItem("tasks") === null
    ? localStorage.setItem("tasks", (JSON.stringify(tasksArr)))
    : console.log(localStorage.getItem("tasks"));

localStorage.getItem("nextId") === null
    ? localStorage.setItem("nextId", 0)
    // : nextId = JSON.parse(localStorage.getItem("nextId"));
    : console.log("nextId is established");

let nextId = localStorage.getItem("nextId");

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

// DONE: create a function to generate a unique task id
function generateTaskId() {
    nextId++;
    localStorage.setItem("nextId", nextId);
    return nextId;
};

const composeTask = () => {
    handleAddTask();
    $("#myForm").trigger("reset"); //thanks to Zach Polof for this line of code!
    generateTaskId();
};

// DONE: create a function to handle adding a new task
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
    
    addToStoredArray(newTaskItem);
};

const addToStoredArray = (newItem) => {
    let tasksJSON = localStorage.getItem("tasks")
    tasksArr = JSON.parse(tasksJSON);
    tasksArr.push(newItem);
    tasksJSON = JSON.stringify(tasksArr);
    localStorage.setItem("tasks", tasksJSON);
};

// DONE: create a function to create a task card
function createTaskCard(task) {

    // HTML for injection
    const card = `
                <div class="card draggable" id="taskCard${task.id}">
                  <div class="card-header h5">
                    ${task.title}
                  </div>
                  <div class="card-body">
                    <h6 class="card-title">${task.details}</h6>
                    <p class="card-text">${task.due}</p>
                    <a href="#" class="btn btn-danger" id="deleteTaskBtn" taskId="${task.id}">Delete</a>
                  </div>
                </div>`
    // sort into appropriate column on send
    sortCard(task, card);
    // ensure listener is added to new delete button
    delBtnListeners();
};

const sortCard = (task, card) => {
    const todoCards = document.getElementById("todo-cards");
    const inProgressCards = document.getElementById("in-progress-cards");
    const completedCards = document.getElementById("done-cards");

    if (task.status == "In Progress") {
        inProgressCards.innerHTML += card;
    } else if (task.status == "Completed") {
        completedCards.innerHTML += card;
    } else {
        todoCards.innerHTML += card;
    };
};

// Todo: create a function to render the task list and make cards draggable

// make cards draggable: jquery widget -- UI interactions
function renderTaskList() {
    let tasksJSON = localStorage.getItem("tasks")
    tasksArr = JSON.parse(tasksJSON);
    for (let i = 0; i < tasksArr.length; i++) {
        const task = tasksArr[i];
        if (task === null) {
            console.log("deleted task")
        } else {
            createTaskCard(task);
        }
    };

    $(function () {
        $(".draggable").draggable();
      });
};

// DONE: create a function to handle deleting a task
function handleDeleteTask(event) {
    let deleteId = event.target.getAttribute("taskId");
    let deleteEl = document.getElementById(`taskCard${deleteId}`);
    deleteEl.remove();
    removeFromStoredArray(deleteId);
};

const removeFromStoredArray = (deleteId) => {
    let tasksJSON = localStorage.getItem("tasks")
    tasksArr = JSON.parse(tasksJSON);
    delete tasksArr[deleteId];
    tasksJSON = JSON.stringify(tasksArr);
    localStorage.setItem("tasks", tasksJSON);
};

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) { // handle MOVE
    //update status of task
    // ${task.status}
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
    taskSubmitBtn.addEventListener("click", composeTask);
    $("#newTaskDueDate").datepicker();
});

const delBtnListeners = () => {
    let deleteBtns = document.querySelectorAll("#deleteTaskBtn");
    deleteBtns.forEach(button => {
        button.addEventListener("click", handleDeleteTask);
    });
};

dayjs().format()
