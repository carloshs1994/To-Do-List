const form = document.querySelector('form');
const placeholder = document.querySelector('ul.placeholder');
let currentLength = 0;
class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let listOfTasks = [];

function appendTaskToList(DotMenu) {
  listOfTasks.forEach((task, index) => {
    if (index > currentLength) return;
    const li = document.createElement('li');
    // Lodash, now imported by this script
    li.innerHTML = `
      <input type="checkbox" id="task" name="task-${task.index + 1}">
      <input type="text" value="${task.description}" id="${task.index}" class="task-text">
      <img class="${task.index}" src="${DotMenu}" alt="Delete or Drag and drop">
    `;
    li.classList.add('hello');
    placeholder.appendChild(li);
  });
}

function removeChildsFromList() {
  document.querySelectorAll('.hello').forEach(e => e.remove());
  document.querySelectorAll('.clear').forEach(e => e.remove());
}

function deleteSingleTask(indexToRemove, input, DotMenu, Trash) {
  // list.listOfTasks = list.listOfTasks.filter((task) => {
  //   return task.index != indexToRemove; 
  // });
  console.log('before delete', listOfTasks.length);
  
  currentLength = listOfTasks.length;
  //list.removeTask(indexToRemove);
  for (let i = 0; i < listOfTasks.length; i += 1) {
    if (indexToRemove === listOfTasks[i].index) {
      listOfTasks.splice(i, 1);
    }
  }
  console.log('The promise is fullfiled!');


  //listOfTasks.length = (currentLength - 1);
  console.log(listOfTasks.length);
  createTask(input, DotMenu, Trash);
  
}

export function createTask(input, DotMenu, Trash) {
  currentLength = listOfTasks.length;
  const task = new Task(input, false, currentLength);
  const lastLi = document.createElement('li');
  //list.addNewTask(task);
  listOfTasks.push(task);
  removeChildsFromList();
  appendTaskToList(DotMenu);
  lastLi.innerHTML = `
    <a href="#">Clear all completed</a>
  `;
  lastLi.className = 'clear';
  placeholder.appendChild(lastLi);
  document.querySelectorAll('.hello').forEach(e => {
    e.addEventListener('keyup', (event) => {
      console.log(listOfTasks[event.target.id].description)
      console.log('it is working!', parseInt(event.target.id));
      listOfTasks[event.target.id].description = event.target.value;
      console.log(listOfTasks[event.target.id].description);
    });
  });
  document.querySelectorAll('li.hello img').forEach((task) => {
    task.addEventListener('click', (event) => {
      if (event.target.src === Trash) {
        deleteSingleTask(parseInt(event.target.className), input, DotMenu, Trash);
      } else if (event.target.src === DotMenu) {
        event.target.src = Trash;
      }
    });
  });
};
