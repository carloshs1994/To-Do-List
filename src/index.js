import _ from 'lodash';
import './style.css';
import Sync from './sync-solid.svg';
import DotMenu from './ellipsis-v-solid.svg'
import Enter from './left-arrow.png';

class List {
  constructor() {
    this.listOfTasks = [];
  }

  addNewTask(newTask) {
    return this.listOfTasks.push(newTask);
  }
}

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const list = new List();

const input1 = 'Run 1 km';
const input2 = 'Run 2 km';
const input3 = 'Run 3 km';

const createTask = (input) => {
  const placeholder = document.querySelector('ul.placeholder');
  const task = new Task(input, false, list.listOfTasks.length);
  const lastLi = document.createElement('li');
  list.addNewTask(task);
  placeholder.innerHTML = `
    <li class="hello">
      <p>Today's To-Do</p>
      <img src="${Sync}" alt="Sync">
    </li>
    <li class="hello">
      <input id="enter-task" placeholder="Add to your list...">
      <img src="${Enter}" alt="Enter">
    </li>
  `;
  list.listOfTasks.forEach(task => {
    const li = document.createElement('li');
    // Lodash, now imported by this script
    li.innerHTML = `
      <input type="checkbox" id="task" name="task-${task.index+1}">
      <label for="task-${task.index+1}">${task.description}</label>
      <img src="${DotMenu}" alt="Delete or Drag and drop">
    `;
    li.classList.add('hello');
    placeholder.appendChild(li);
  });
  lastLi.innerHTML = `
    <a href="#">Clear all completed</a>
  `;
  lastLi.className = 'clear';
  placeholder.appendChild(lastLi);
}

createTask(input1);
createTask(input2);
createTask(input3);
