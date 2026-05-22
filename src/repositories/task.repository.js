const tasks = [];

function findAll() {
  return tasks;
}

function findById(id) {
  return tasks.find((task) => task.id === id) || null;
}

function create(task) {
  tasks.push(task);
  return task;
}

function update(id, updatedTask) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index >= 0) {
    tasks[index] = updatedTask;
  }
  return updatedTask;
}

function remove(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index >= 0) {
    tasks.splice(index, 1);
  }
}

function clear() {
  tasks.length = 0;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
  clear
};
