# ✅ Interactive To-Do List App

A simple, responsive, and interactive To-Do List application built using **HTML5, CSS3, and JavaScript**. Add tasks, mark them as completed, and delete them with ease. The app uses browser `localStorage` to preserve tasks even after refreshing the page.

## ✨ Features

- ➕ **Add Tasks:** Quickly add new tasks using the input field.
- ✅ **Mark as Completed:** Mark tasks as complete or undo completion.
- 🗑️ **Delete Tasks:** Remove tasks you no longer need.
- 💾 **Local Storage:** Automatically saves tasks in the browser.
- 🔄 **Dynamic Updates:** Updates the task list without reloading the page.
- 📊 **Task Counter:** Displays the number of remaining tasks.
- 📭 **Empty State:** Shows a message when there are no tasks.
- 📱 **Responsive Design:** Works on desktop, tablet, and mobile devices.
- 🎨 **Simple Styling:** Completed tasks have green backgrounds and strikethrough text.

## 🛠️ Technologies Used

- **HTML5** — Structures the application.
- **CSS3** — Provides styling, layout, and responsive design.
- **JavaScript (ES6+)** — Handles task management and DOM manipulation.
- **localStorage** — Stores tasks in the browser.

## 📂 Project Structure

```
interactive-todo-list/
│
├── index.html       # Main HTML structure
├── style.css        # Styling and responsive layout
├── script.js        # Task management logic
└── README.md        # Project documentation
```

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, etc.).
- A code editor such as Visual Studio Code.
- Optional: VS Code Live Server extension.

### Installation

**1. Clone the repository**

```
git clone https://github.com/your-username/interactive-todo-list.git
```

**2. Navigate to the project folder**

```
cd interactive-todo-list
```

**3. Open the project**

Open `index.html` directly in your browser, or open the folder in VS Code and launch `index.html` using Live Server.

No additional dependencies or package installations are required.




### Completed Tasks


## 💡 How to Use

1. Open the application in your browser.
2. Enter a task in the input field.
3. Click **Add Task** to add it to the list.
4. Click **Complete** to mark a task as completed.
5. Click **Undo** to mark a completed task as pending again.
6. Click **Delete** to remove a task.
7. Refresh the page to verify that your tasks remain saved.

## 💾 How Data Persistence Works

The application uses the browser's `localStorage` API to store tasks.

```
// Save tasks
localStorage.setItem("todoTasks", JSON.stringify(tasks));

// Retrieve tasks
let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
```

### Explanation

- `localStorage.setItem()` saves the task array as a JSON string.
- `JSON.stringify()` converts JavaScript data into a storable string.
- `localStorage.getItem()` retrieves the previously saved data.
- `JSON.parse()` converts the stored JSON string back into a JavaScript array.
- The application renders saved tasks when the page loads.

**Note:** Data is stored locally in the browser. It does not automatically synchronize across different devices or browsers.

## 🎯 Learning Objectives

This project helps practice:

- DOM manipulation and dynamic element creation.
- JavaScript arrays and objects.
- Event listeners and form submission.
- Array methods such as `map()`, `filter()`, and `forEach()`.
- Conditional rendering and CSS class toggling.
- Browser storage using `localStorage`.
- JSON serialization and parsing.
- Responsive web design with CSS media queries.

## 🔮 Future Improvements

Possible enhancements include:

- Edit existing tasks.
- Add task priority levels.
- Set due dates and reminders.
- Filter tasks by All, Active, and Completed.
- Add a Clear Completed button.
- Add dark mode.
- Add drag-and-drop task sorting.
- Add cloud synchronization and user accounts.


## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit and push your changes.
5. Open a Pull Request.

