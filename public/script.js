const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


async function loadTasks() {
    const res = await fetch('/tasks');
    const tasks = await res.json();
    taskList.innerHTML = ''; 
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}


addBtn.addEventListener('click', async () => {
    const task = taskInput.value;
    if (!task) return;

    await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task })
    });

    taskInput.value = ''; 
    loadTasks(); 
});

loadTasks(); 