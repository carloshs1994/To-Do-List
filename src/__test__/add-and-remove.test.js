const appendTasks = require('../add-and-remove.js');

// test('should return the same String but with the first character capitalized.', () => {
//   expect(capitalize('carlos')).toBe('Carlos');
// });

test('Add one new item to the list', () => {
  const DotMenu = './ellipsis-v-solid.svg';
  const listOfTask = [{ describe: 'Run 1 km' }];
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