function clearCheckedTasks(listOfTasks) {
  listOfTasks = listOfTasks.filter((task) => task.completed === false);
  listOfTasks.forEach((task, index) => {
    task.index = index;
  });
  return listOfTasks;
}

function checkboxStatus(event, listOfTasks) {
  if (event.target.checked) {
    listOfTasks[event.target.parentNode.children[1].id].completed = true;
  } else if (!event.target.checked) {
    listOfTasks[event.target.parentNode.children[1].id].completed = false;
  }
  return listOfTasks;
}

function updateListArray(DotMenu, event, listOfTasks) {
  if (event.keyCode === 13) {
    event.target.parentElement.children[2].src = DotMenu;
  }
  listOfTasks[event.target.id].description = event.target.value;
}

export {
  clearCheckedTasks,
  checkboxStatus,
  updateListArray,
};