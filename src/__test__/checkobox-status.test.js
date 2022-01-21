import {
  clearCheckedTasks,
  checkboxStatus,
  updateListArray,
} from '../checkbox-status.js';

describe('List status updates', () => {
  const dotMenu = './ellipsis-v-solid.svg';
  let listOfTask = [{
    description: 'Run 1 km',
    completed: false,
    index: 0,
  },
  {
    description: 'Buy apples',
    completed: true,
    index: 1,
  },
  {
    description: 'Pet my cat',
    completed: true,
    index: 2,
  },
  ];
  test('should update the describe value inside listOfTasks', () => {
    const keyboardEvent = {
      keyCode: 13,
      target: {
        id: 0,
        value: 'Run 3 km',
        parentElement: {
          children: [{
            input: {
              id: 'task',
            },
          },
          {
            input: {
              id: 4,
              class: 'task-test',
            },
          },
          {
            class: 4,
            src: './trash-alt-regular.svg',
          },
          ],
        },
      },
    };
    const indexOfChanged = keyboardEvent.target.id;
    updateListArray(dotMenu, keyboardEvent, listOfTask);
    expect(keyboardEvent.target.parentElement.children[2].src).toEqual('./ellipsis-v-solid.svg');
    expect(listOfTask[indexOfChanged].description).toEqual('Run 3 km');
  });
  test('Complete items', () => {
    const checkBoxEvent = {
      target: {
        id: 0,
        checked: true,
        parentNode: {
          children: [{
            input: {
              id: 'task',
            },
          },
          {
            input: '',
            id: 0,
          },
          ],
        },
      },
    };
    checkboxStatus(checkBoxEvent, listOfTask);
    const indexOfCheckbox = checkBoxEvent.target.id;
    expect(listOfTask[indexOfCheckbox].completed).toEqual(true);
  });
  test('should remove all completed tasks', () => {
    listOfTask = clearCheckedTasks(listOfTask);
    expect(listOfTask.length).toEqual(0);
  });
});