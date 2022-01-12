import './style.css';
import Sync from './sync-solid.svg';
import DotMenu from './ellipsis-v-solid.svg';
import Trash from './trash-alt-regular.svg'
import Enter from './left-arrow.png';
class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
const input = document.querySelector('#enter-task');
let listOfTasks = [];

document.getElementById("sync-icon").src = Sync;
document.getElementById("enter-icon").src = Enter;

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  createTask(input.value);
  input.value = '';
});

function addToLocalStorage(listOfTasks) {
  localStorage.setItem('To-Do-List', JSON.stringify(listOfTasks));
}

const placeholder = document.querySelector('ul.placeholder');

function appendTaskToListAndUpdateLocalStorage() {
  const lastLi = document.createElement('li');
  localStorage.clear();
  addToLocalStorage(listOfTasks);
  listOfTasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="task" name="task-${task.index + 1}">
      <input type="text" value="${task.description}" id="${task.index}" class="task-text">
      <img class="${task.index}" src="${DotMenu}" alt="Delete or Drag and drop">
    `;
    li.classList.add('hello');
    placeholder.appendChild(li);
  });
  lastLi.innerHTML = `
    <a href="#">Clear all completed</a>
  `;
  lastLi.className = 'clear';
  placeholder.appendChild(lastLi);
  document.querySelectorAll('.hello').forEach(e => {
    e.addEventListener('keyup', (event) => {
      listOfTasks[event.target.id].description = event.target.value;
    });
  });
  document.querySelectorAll('li.hello img').forEach((task) => {
    task.addEventListener('click', (event) => {
      if (event.target.src === Trash) {
        deleteSingleTask(parseInt(event.target.className));
      } else if (event.target.src === DotMenu) {
        event.target.src = Trash;
      }
    });
  });
}

function removeChildsFromList() {
  document.querySelectorAll('.hello').forEach(e => e.remove());
  document.querySelectorAll('.clear').forEach(e => e.remove());
}

function deleteSingleTask(indexToRemove) {
  for (let i = 0; i < listOfTasks.length; i += 1) {
    if (indexToRemove === listOfTasks[i].index) {
      listOfTasks.splice(i, 1);
    }
  }
  listOfTasks.forEach((task, index) => {
    listOfTasks[index].index = index;
  });
  removeChildsFromList();
  appendTaskToListAndUpdateLocalStorage();
}

function createTask(input) {
  const task = new Task(input, false, listOfTasks.length);
  listOfTasks.push(task);
  removeChildsFromList();
  appendTaskToListAndUpdateLocalStorage();
};

function getFromLocalStorage() {
  if (localStorage.length !== 0) {
    const tasksFromLocStg = JSON.parse(localStorage.getItem('To-Do-List'));
    tasksFromLocStg.forEach((task) => {
      listOfTasks.push(task);
    });
    removeChildsFromList();
    appendTaskToListAndUpdateLocalStorage();
  }
}

getFromLocalStorage();