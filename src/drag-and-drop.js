export default function dragAndDrop(Task, listOfTasks) {
  const dragTask = document.querySelectorAll('.hello');
  const placeholder = document.querySelector('.placeholder');

  dragTask.forEach((task) => {
    task.addEventListener('dragstart', () => {
      task.classList.add('dragging');
    });
    task.addEventListener('dragend', () => {
      task.classList.remove('dragging');
      placeholder.querySelectorAll('.hello').forEach((newTask, index) => {
        let completed = false;
        if (newTask.children[1].className === 'task-text checked-task') {
          completed = true;
        }
        const task = new Task(newTask.children[1].value, completed, index);
        listOfTasks[index] = task;
      });
      localStorage.clear();
      localStorage.setItem('To-Do-List', JSON.stringify(listOfTasks));
    });
  });

  placeholder.addEventListener('dragover', (event) => {
    event.preventDefault();
    const draggableTask = document.querySelector('.dragging');
    const tasksUnderDragging = [...placeholder.querySelectorAll('.hello:not(.dragging)')];
    const clearButton = document.querySelector('.clear');
    const underTask = tasksUnderDragging.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = (event.clientY - box.top - 25);
      if (offset < 0 && offset > closest.offset) {
        return {
          offset,
          element: child,
        };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
    if (underTask == null) {
      placeholder.insertBefore(draggableTask, clearButton);
    } else {
      placeholder.insertBefore(draggableTask, underTask);
    }
  });
}