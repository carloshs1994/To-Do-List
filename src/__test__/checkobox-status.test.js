import {
  clearCheckedTasks,
  checkboxStatus,
  updateListArray,
} from '../checkbox-status.js';

test('should update the describe value inside listOfTasks', () => {
  const DotMenu = './ellipsis-v-solid.svg';
  const listOfTask = [{
    description: 'Run 1 km',
    completed: false,
    index: 0,
  }];
  const KeboardEvent = {
    keyCode: 13,
    target: {
      parentElement: {
        children: [
          {
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
      id: '0',
    },
  };
  updateListArray(DotMenu, KeboardEvent, listOfTask);
  expect(KeboardEvent.target.parentElement.children[2].src).toEqual('./ellipsis-v-solid.svg');
});
