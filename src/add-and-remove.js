function addToLocalStorage(listOfTasks) {
  localStorage.setItem('To-Do-List', JSON.stringify(listOfTasks));
}

export function removeChildsFromList() {
  document.querySelectorAll('.hello').forEach((e) => e.remove());
  document.querySelectorAll('.clear').forEach((e) => e.remove());
}

export function appendTaskToListAndUpdateLocalStorage(DotMenu, Trash, listOfTasks) {
  const placeholder = document.querySelector('ul.placeholder');
  const lastLi = document.createElement('li');
  localStorage.clear();
  addToLocalStorage(listOfTasks);
  listOfTasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="task" name="task-${task.index + 1}">
      <input type="text" value="${task.description}" id="${task.index}" class="task-text">
      <img class="${task.index}" src="${DotMenu}" alt="Delete or Drag and drop">
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

export function deleteSingleTask(indexToRemove, listOfTasks, DotMenu, Trash) {
  for (let i = 0; i < listOfTasks.length; i += 1) {
    if (indexToRemove === listOfTasks[i].index) {
      listOfTasks.splice(i, 1);
    }
  }
  listOfTasks.forEach((task, index) => {
    console.log(task);
    task.index = index;
  });
  removeChildsFromList();
  appendTaskToListAndUpdateLocalStorage(DotMenu, Trash, listOfTasks);
}
