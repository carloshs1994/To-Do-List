export function clearCheckedTasks(listOfTasks) {
  listOfTasks = listOfTasks.filter((task) => task.completed === false);
  listOfTasks.forEach((task, index) => {
    task.index = index;
  });
  return listOfTasks;
}

export function checkboxStatus(event, listOfTasks) {
  event.target.parentNode.children[1].classList.toggle('checked-task');
  if (event.target.checked) {
    listOfTasks[event.target.parentNode.children[1].id].completed = true;
  } else if (!event.target.checked) {
    listOfTasks[event.target.parentNode.children[1].id].completed = false;
  }
  return listOfTasks;
}