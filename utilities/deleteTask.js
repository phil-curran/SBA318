const deleteTask = (taskId) => {
  tasks = tasks.filter((task) => task.id != taskId);
  return tasks;
};

module.exports = deleteTask;
