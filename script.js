// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  
  // Function to edit a task
  function editTask(button) {
    const newText = prompt('Edit the task:', button.previousElementSibling.textContent.trim());
  
    if (newText !== null && newText.trim() !== '') {
      button.previousElementSibling.textContent = newText.trim();
    }
  }
  
  // Function to delete a task
  function deleteTask(button) {
    button.parentElement.remove();
  }
  