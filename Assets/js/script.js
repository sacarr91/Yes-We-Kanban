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
                <div class="card mb-2 draggable" id="taskCard${task.id}" taskId="${task.id}">
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
    colorCode(task, card);
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

const delBtnListeners = () => {
    let deleteBtns = document.querySelectorAll("#deleteTaskBtn");
    deleteBtns.forEach(button => {
        button.addEventListener("click", handleDeleteTask);
    });
};

const colorCode = (task, card) => {
    let taskDue = dayjs(`${task.due}`, "MM-DD-YYYY");
    let todayObject = dayjs().toObject();
    let dueObject = dayjs(taskDue).toObject();
    let [dd, dm, dy, td, tm, ty] = [dueObject.date, dueObject.months, dueObject.years, todayObject.date, todayObject.months, todayObject.years];

    card = document.getElementById(`taskCard${task.id}`);
    const future = () => $(card).removeClass("dueSoon dueToday overdue").addClass("future");
    const dueSoon = () => $(card).removeClass("future dueToday overdue").addClass("dueSoon");
    const dueToday = () => $(card).removeClass("dueSoon future overdue").addClass("dueToday");
    const overdue = () => $(card).removeClass("dueSoon dueToday future").addClass("overdue");

    // avoid color code for "done" items
    if (task.status == "Completed") {
        return;
        // SAME DAY ASSESSMENT 
    } else if ((td == dd) && (tm == dm) && (ty == dy)) {
        dueToday();
        // YEAR ASSESSMENT
        // previous year
    } else if ((dy - ty) < 0) {
        overdue();
        // distant year
    } else if ((dy - ty) > 1) {
        future();
        // next year
    } else if ((dy - ty) == 1) {
        // DEC -> JAN
        if ((dm == 1) && (tm == 12)) {
            // 30th -> 1st || 31st -> 2nd
            if (((td >= 30) && (dd == 1))
                || ((td == 31) && (dd <= 2))) {
                dueSoon();
            } else {
                future();
            };
        };
        // this year
    } else {
        // MONTH ASSESSMENT
        // previous month
        if (dm < tm) {
            overdue();

            // next month
        } else if (dm == (tm + 1)) {
            if (tm == 2) { // feb
                if (((td >= 27) && (dd == 1))
                    || ((td == 28) && (dd <= 2))) {
                    dueSoon();
                } else {
                    future();
                };
            } else if ((tm == 4) || (tm == 6) || (tm == 9) || (tm == 11)) { // 30 days: April, June, Sept, Nov
                if (((td >= 29) && (dd == 1))
                    || ((td == 30) && (dd <= 2))) {
                    dueSoon();
                } else {
                    future();
                };
            } else { // 31 days
                if (((td >= 30) && (dd == 1))
                    || ((td == 31) && (dd <= 2))) {
                    dueSoon();
                } else {
                    future();
                }
            };

            // this month
        } else if (dm == tm) {
            // DAY ASSESSMENT
            // previous day
            if ((dd - td) <= 0) {
                overdue();
                // within next 2 days
            } else if (((dd - td) <= 2) && ((dd - td) > 0)) {
                dueSoon();
                // more than 2 days
            } else {
                future();
            };
        } else {
            console.log("My deductive reasoning regarding date comparison logic is lacking.")
        };
    };
};

// DONE: create a function to render the task list and make cards draggable
function renderTaskList() {
    let tasksJSON = localStorage.getItem("tasks")
    tasksArr = JSON.parse(tasksJSON);
    for (let i = 0; i < tasksArr.length; i++) {
        const task = tasksArr[i];
        if (task === null) {
            console.log("deleted task(s)")
        } else {
            createTaskCard(task);
        }
    };
    handleDrag();
};

function handleDrag() {
    $(".draggable").draggable(({ revert: "invalid" }));
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
function setDropZone(event, draggable) {
    $(".droppable").droppable({
        tolerance: "fit",
        accept: ".draggable",
        classes: {
            "ui-droppable-active": "custom-state-active"
        },
        drop: handleDrop()
    });
};

function handleDrop(item) { // handle MOVE
    $("<ul class='gallery ui-helper-reset'/>").appendTo($`#${item.status}`);

    //update status of task
    // ${task.status}

    sortCard();
};

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
    taskSubmitBtn.addEventListener("click", composeTask);
    handleDrop();


});



dayjs().format();