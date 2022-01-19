const appendTasks = require('../add-and-remove.js');

// test('should return the same String but with the first character capitalized.', () => {
//   expect(capitalize('carlos')).toBe('Carlos');
// });

const DotMenu = './ellipsis-v-solid.svg';
const listOfTask = [{ describe: 'Run 1 km' }];
/**
 * @jest-environment jsdom
 */
const placeholder = document.querySelector('ul.placeholder');
document.body.innerHTML = `
  <div>
    <ul class="placeholder"></ul>
  </div>
`;
appendTasks(listOfTask, DotMenu, placeholder);
expect(placeholder).toHaveLength(1);
