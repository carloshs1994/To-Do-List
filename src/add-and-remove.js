export function addToLocalStorage(listOfTasks) {
  localStorage.setItem('To-Do-List', JSON.stringify(listOfTasks));
}

export function removeChildsFromList() {
  document.querySelectorAll('.hello').forEach((e) => e.remove());
  document.querySelectorAll('.clear').forEach((e) => e.remove());
}

export function appendTaskToListAndUpdateLocalStorage(DotMenu, listOfTasks) {
  const placeholder = document.querySelector('ul.placeholder');
  const lastLi = document.createElement('li');
  localStorage.clear();
  addToLocalStorage(listOfTasks);
  listOfTasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="task">
      <input type="text" value="${task.description}" id="${task.index}" class="task-text">
      <img class="${task.index}" src="${DotMenu}" alt="Delete or Drag and drop">
    `;
    li.classList.add('hello');
    li.draggable = true;
    placeholder.appendChild(li);
    if (task.completed && (li.children[1].className !== 'task-text checked-task')) {
      li.children[0].checked = true;
      li.children[1].classList.add('checked-task');
    }
  });
  lastLi.innerHTML = `
    <a href="#">Clear all completed</a>
  `;
  lastLi.className = 'clear';
  placeholder.appendChild(lastLi);
}

export function deleteSingleTask(indexToRemove, listOfTasks, DotMenu) {
  for (let i = 0; i < listOfTasks.length; i += 1) {
    if (indexToRemove === listOfTasks[i].index) {
      listOfTasks.splice(i, 1);
    }
  }
  listOfTasks.forEach((task, index) => {
    task.index = index;
  });
  removeChildsFromList();
  appendTaskToListAndUpdateLocalStorage(DotMenu, listOfTasks);
}
