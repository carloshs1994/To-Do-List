import {
  // clearCheckedTasks,
  // checkboxStatus,
  updateListArray,
} from '../checkbox-status.js';

test('should update the describe value inside listOfTasks', () => {
  const dotMenu = './ellipsis-v-solid.svg';
  const listOfTask = [{
    description: 'Run 1 km',
    completed: false,
    index: 0,
  }];
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