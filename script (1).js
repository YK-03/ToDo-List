document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const task = document.createElement('li');
    task.innerHTML = `
      <span>${taskInput.value}</span>
      <button class="delete-button" onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(task);
    taskInput.value = '';
  }
}

function removeTask(button) {
  const task = button.parentNode;
  const taskList = document.getElementById('taskList');
  taskList.removeChild(task);
}
