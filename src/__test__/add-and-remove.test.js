import {
  appendTasks,
  deleteSingleTask,
} from '../add-and-remove.js';

describe('add & remove', () => {
  const DotMenu = './ellipsis-v-solid.svg';
  const listOfTask = [{
    description: 'Run 1 km',
    completed: false,
    index: 0,
  }];

  test('Add one new item to the list', () => {
    /**
     * @jest-environment jsdom
     */
    document.body.innerHTML = `
  <div>
  <ul class="placeholder"></ul>
  </div>
  `;
    const placeholder = document.querySelector('ul.placeholder');
    appendTasks(listOfTask, DotMenu, placeholder);
    const list = document.querySelectorAll('ul.placeholder li');
    expect(list).toHaveLength(1);
  });

  test('remove an item from the list', () => {
    /**
     * @jest-environment jsdom
     */
    document.body.innerHTML = `
  <div>
    <ul class="placeholder">
      <li class="hello" draggable="true">
        <input type="checkbox" id="task">
        <input type="text" value="Run 1 km" id="0" class="task-text">
        <img class="0" src="http://localhost:8080/d529b620fd57a0e412bd.svg" alt="Delete or Drag and drop">
      </li>
    </ul>
  </div>
  `;

    deleteSingleTask(0, listOfTask, DotMenu);
    const list = document.querySelectorAll('ul.placeholder li');
    expect(list).toHaveLength(0);
  });
});