// Retrieve tasks and nextId from localStorage
localStorage.getItem("tasks") = null
    ? localStorage.setItem("tasks", [])
    : taskList = JSON.parse(localStorage.getItem("tasks"));
localStorage.getItem("nextId") = null
    ? localStorage.setItem("nextId", 0)
    // : nextId = JSON.parse(localStorage.getItem("nextId"));
    : nextId = localStorage.getItem("nextId");

const addTaskBtn = document.getElementById("addTaskBtn");
let newTaskTitleEl = document.getElementById("newTaskTitle");
let newTaskDetailsEl = document.getElementById("newTaskDetails");
let newTaskDueDateEl = document.getElementById("newTaskDueDate");
let newTaskStatusEl = document.getElementById("newTaskStatus");

const composeTask = () => {
    handleAddTask();
}

    // Todo: create a function to handle adding a new task
    function handleAddTask(event) {
        generateTaskId();
        let newTaskItem = {
            id: nextId,
            title: newTaskTitleEl.value,
            details: newTaskDetailsEl.value,
            due: newTaskDueDateEl.value,
            status: newTaskStatusEl.value
        };
        taskList.push(newTaskItem);
        localStorage.setItem("tasks", taskList);
    }

        // Todo: create a function to generate a unique task id
        function generateTaskId() {
            nextId++;
            localStorage.setItem("nextId", nextId);
            return nextId;
        }

// Todo: create a function to create a task card
function createTaskCard(task) {
// HTML injection
`${task.title}`
`${task.details}`
`${task.due}`
`${task.status}`
}

// Todo: create a function to render the task list and make cards draggable
// pull tasks from location
// add current tasks
// make cards draggable: jquery widget -- UI interactions
function renderTaskList() {
    //make columns & cards appear from localStorage

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) { // handle MOVE
    //update status of task

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
    addTaskBtn.addEventListener("click", composeTask);
});

dayjs().format()
