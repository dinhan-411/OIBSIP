function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = createTaskItem(taskText);
    document.getElementById('pendingTasks').appendChild(taskItem);

    taskInput.value = '';
}

function createTaskItem(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="material-icons">done</i>';
    completeButton.className = 'complete';
    completeButton.onclick = function () {
        completeTask(li);
    };

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="material-icons">edit</i>';
    editButton.className = 'edit';
    editButton.onclick = function () {
        editTask(li);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="material-icons">close</i>';
    deleteButton.className = 'delete';
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

function completeTask(taskItem) {
    taskItem.classList.toggle('completed');
    const taskList = taskItem.classList.contains('completed') ? 'completedTasks' : 'pendingTasks';
    document.getElementById(taskList).appendChild(taskItem);
}

function editTask(taskItem) {
const newTaskText = prompt('Edit task:', taskItem.textContent);

if (newTaskText !== null && newTaskText.trim() !== '') {
taskItem.textContent = newTaskText.trim();
if (taskItem.classList.contains('completed')) {
    taskItem.classList.remove('completed');
    document.getElementById('pendingTasks').appendChild(taskItem);
}
}
}

function deleteTask(taskItem) {
    taskItem.parentNode.removeChild(taskItem);
}