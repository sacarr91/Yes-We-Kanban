// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

let newTaskTitleEl = document.getElementById("newTaskTitle");
let newTaskDetailsEl = document.getElementById("newTaskDetails");
let newTaskDueDateEl = document.getElementById("newTaskDueDate");

const composeTask = () => {
    const modalAdd = `<div class="modal fade" id="staticBackdrop-login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Log In</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="form">
                                <div class="form-group">
                                    <div>
                                        <label for="title">Task Title</label>
                                        <input type="text" class="form-control" id="taskTitle" placeholder="Task Title">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Task Details</label>
                                        <input type="text" class="form-control" id="taskDetails" placeholder="Enter Details">
                                    </div>
                                </div>
                                <div id="setting">
              <h3 class="col-5" id="setting-header">
                Lesson Location
              </h3>
              <select name="lesson_setting" class="form-select text-muted mb-3" aria-label="Default select example"
                id="lesson-setting-list" required>
                <option value="">Select lesson setting</option>
                <option value="inHome">✅In Person 🏠Willing to Travel to Student's Home</option>
                <option value="inStudio">✅Teacher's Studio Only / ⛔Travel ⛔Virtual</option>
                <option value="virtual">✅Virtual Only / ⛔In-Person</option>
                <option value="hybrid">✅Virtual ✅In Person</option>
              </select>
            </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary btn-login submit" id="taskSubmit">Add Task</button>
                        </div>
                    </div>
                </div>
            </div>`;
    cardDeck.innerHTML += modalAdd;
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
    nextId++;
    localStorage.setItem(`nextId`, nextId);
    return nextId;
}

// Todo: create a function to create a task card
// HTML injection
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
// pull tasks from location
// add current tasks
// make cards draggable
function renderTaskList() {
    //jquery widget -- UI interactions
    taskList

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    let newTask = {
        title: 
    }
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();

});

dayjs().format()
