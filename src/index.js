import './style.css';
import Sync from './sync-solid.svg';
import DotMenu from './ellipsis-v-solid.svg';
import Trash from './trash-alt-regular.svg';
import Enter from './left-arrow.png';
import { appendTaskToListAndUpdateLocalStorage, removeChildsFromList, deleteSingleTask } from './add-and-remove.js';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
const input = document.querySelector('#enter-task');
const listOfTasks = [];

document.getElementById('sync-icon').src = Sync;
document.getElementById('enter-icon').src = Enter;

function addEventsToTasks() {
  document.querySelectorAll('.hello').forEach((e) => {
    e.addEventListener('keyup', (event) => {
      listOfTasks[event.target.id].description = event.target.value;
    });
  });
  document.querySelectorAll('li.hello img').forEach((task) => {
    task.addEventListener('click', (event) => {
      if (event.target.src === Trash) {
        deleteSingleTask(parseInt(event.target.className, 10), listOfTasks, DotMenu, Trash);
        addEventsToTasks();
      } else if (event.target.src === DotMenu) {
        event.target.src = Trash;
      }
    });
  });
}

function getFromLocalStorage() {
  if (localStorage.length !== 0) {
    const tasksFromLocStg = JSON.parse(localStorage.getItem('To-Do-List'));
    tasksFromLocStg.forEach((task) => {
      listOfTasks.push(task);
    });
    removeChildsFromList();
    appendTaskToListAndUpdateLocalStorage(DotMenu, Trash, listOfTasks);
    addEventsToTasks();
  }
}

function createTask(input) {
  const task = new Task(input, false, listOfTasks.length);
  listOfTasks.push(task);
  removeChildsFromList();
  appendTaskToListAndUpdateLocalStorage(DotMenu, Trash, listOfTasks);
  addEventsToTasks();
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  createTask(input.value);
  input.value = '';
});

getFromLocalStorage();