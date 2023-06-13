// Array to store tasks
let tasks = [];

// Add a new task to the pending list
function addTask() {
    const input = document.getElementById('new-task');
    const taskName = input.value.trim();

    if (taskName !== '') {
        const newTask = {
            name: taskName,
            completed: false
        };

        tasks.push(newTask);
        input.value = '';

        renderTasks();
    }
}

// Render the pending and completed tasks
function renderTasks() {
    const pendingTasks = document.getElementById('pending-tasks');
    const completedTasks = document.getElementById('completed-tasks');

    // Clear the lists
    pendingTasks.innerHTML = '';
    completedTasks.innerHTML = '';

    // Render pending tasks
    tasks.filter(task => !task.completed).forEach(task => {
        const li = createTaskListItem(task);
        pendingTasks.appendChild(li);
    });

    // Render completed tasks
    tasks.filter(task => task.completed).forEach(task => {
        const li = createTaskListItem(task);
        li.classList.add('completed');
        completedTasks.appendChild(li);
    });
}

// Create a list item for a task
function createTaskListItem(task) {
    const li = document.createElement('li');
    li.textContent = task.name;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(task);
    li.appendChild(deleteBtn);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
    completeBtn.onclick = () => toggleComplete(task);
    li.appendChild(completeBtn);

    return li;
}

// Toggle a task's completion status
function toggleComplete(task) {
    task.completed = !task.completed;
    renderTasks();
}

// Delete a task
function deleteTask(task) {
    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Render initial tasks
renderTasks();
