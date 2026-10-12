
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const emptyMessage = document.getElementById("empty-message");

// Load saved tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// Display all tasks on the page
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }

        // Create task text
        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;

        // Create complete button
        const completeButton = document.createElement("button");
        completeButton.className = "complete-btn";
        completeButton.textContent = task.completed
            ? "Undo"
            : "Complete";
        completeButton.setAttribute(
            "aria-label",
            task.completed ? "Mark task incomplete" : "Mark task complete"
        );

        completeButton.addEventListener("click", () => {
            toggleTask(task.id);
        });

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("aria-label", "Delete task");

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
        });

        // Add elements to the task item
        li.append(span, completeButton, deleteButton);
        taskList.appendChild(li);
    });

    // Update remaining task count
    const remainingTasks = tasks.filter(
        (task) => !task.completed
    ).length;

    taskCount.textContent =
        `${remainingTasks} ${remainingTasks === 1 ? "task" : "tasks"} remaining`;

    // Show or hide the empty message
    emptyMessage.style.display =
        tasks.length === 0 ? "block" : "none";
}

// Add a new task
function addTask(text) {
    const newTask = {
        id: crypto.randomUUID(),
        text: text,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();
    renderTasks();
}

// Mark a task complete or incomplete
function toggleTask(id) {
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });

    saveTasks();
    renderTasks();
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);

    saveTasks();
    renderTasks();
}

// Handle form submission
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        taskInput.focus();
        return;
    }

    addTask(text);

    taskInput.value = "";
    taskInput.focus();
});

// Display saved tasks when the page loads
renderTasks();
