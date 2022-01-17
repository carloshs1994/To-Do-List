import './style.css';
import Sync from './sync-solid.svg';
import DotMenu from './ellipsis-v-solid.svg';
import Trash from './trash-alt-regular.svg';
import Enter from './left-arrow.png';
import {
  clearCheckedTasks,
  checkboxStatus,
} from './checkbox-status.js';
import {
  appendTaskToListAndUpdateLocalStorage,
  removeChildsFromList,
  deleteSingleTask,
  addToLocalStorage,
} from './add-and-remove.js';
import dragAndDrop from './drag-and-drop.js';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
const input = document.querySelector('#enter-task');
let listOfTasks = [];

document.getElementById('sync-icon').src = Sync;
document.getElementById('enter-icon').src = Enter;

function addEventsToTasks() {
  dragAndDrop(Task, listOfTasks);
  document.querySelector('.clear').addEventListener('click', () => {
    listOfTasks = clearCheckedTasks(listOfTasks);
    removeChildsFromList();
    appendTaskToListAndUpdateLocalStorage(DotMenu, listOfTasks);
    addEventsToTasks();
  });
  document.querySelectorAll('#task').forEach((task) => {
    task.addEventListener('change', (event) => {
      listOfTasks = checkboxStatus(event, listOfTasks);
      localStorage.clear();
      addToLocalStorage(listOfTasks);
    });
  });
  document.querySelectorAll('.hello').forEach((e) => {
    e.addEventListener('keyup', (event) => {
      listOfTasks[event.target.id].description = event.target.value;
      localStorage.clear();
      addToLocalStorage(listOfTasks);
    });
  });
  document.querySelectorAll('li.hello img').forEach((task) => {
    task.addEventListener('click', (event) => {
      if (event.target.src === Trash) {
        deleteSingleTask(parseInt(event.target.className, 10), listOfTasks, DotMenu);
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
    appendTaskToListAndUpdateLocalStorage(DotMenu, listOfTasks);
    addEventsToTasks();
  }
}

function createTask(input) {
  const task = new Task(input, false, listOfTasks.length);
  listOfTasks.push(task);
  removeChildsFromList();
  appendTaskToListAndUpdateLocalStorage(DotMenu, listOfTasks);
  addEventsToTasks();
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  createTask(input.value);
  input.value = '';
});

getFromLocalStorage();