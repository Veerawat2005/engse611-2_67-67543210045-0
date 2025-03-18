// Get DOM elements
const taskInput = document.getElementById('taskInput');
const taskType = document.getElementById('taskType');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem(taskText, type) {
  const li = document.createElement('li');
  
  // Add task image (icon) based on type
  const taskImage = document.createElement('img');
  taskImage.src = getTaskIcon(type); // Get appropriate icon based on type
  taskImage.alt = 'task icon';
  taskImage.classList.add('task-icon');

  // Task label
  const taskLabel = document.createElement('span');
  taskLabel.textContent = taskText;

  // Add complete task functionality (mark as completed)
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Add delete button functionality with confirmation
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'ลบ';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent triggering the click event on li
    if (confirm('คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?')) {
      taskList.removeChild(li);
    }
  });

  // Append elements
  li.appendChild(taskImage);
  li.appendChild(taskLabel);
  li.appendChild(deleteButton);

  return li;
}

// Function to get task icon based on task type
function getTaskIcon(type) {
  switch (type) {
    case 'work':
      return 'https://via.placeholder.com/20/0000FF'; // Blue for work
    case 'personal':
      return 'https://via.placeholder.com/20/FF6347'; // Tomato for personal
    case 'shopping':
      return 'https://via.placeholder.com/20/32CD32'; // Lime green for shopping
    default:
      return 'https://via.placeholder.com/20'; // Default icon
  }
}

// Function to add new task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const taskCategory = taskType.value;

  if (taskText !== '') {
    const newTaskItem = createTaskItem(taskText, taskCategory);
    taskList.appendChild(newTaskItem);
    taskInput.value = ''; // Clear input field
  } else {
    alert('กรุณากรอกรายการที่จะเพิ่ม');
  }
});

// Optional: Allow pressing Enter to add task
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTaskButton.click();
  }
});
