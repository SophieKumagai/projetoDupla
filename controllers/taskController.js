const Task = require('../models/Task');

module.exports = {
  async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });
    const tasksWithClass = tasks.map((task) => {
      let priorityClass = 'priority-media';
      if (task.priority === 'Alta') priorityClass = 'priority-alta';
      else if (task.priority === 'Baixa') priorityClass = 'priority-baixa';
      return { ...task, priorityClass };
    });
    res.render('all', { tasks: tasksWithClass });
  },

  createTask(req, res) {
    res.render('create');
  },

  async saveTask(req, res) {
    await Task.create({
      title: req.body.title,
      description: req.body.description,
      done: false, // O status inicial é sempre 'false'
      priority: req.body.priority,
      dueDate: req.body.dueDate[
    });
    res.redirect('/tasks');
  },

  async editTask(req, res) {
    const id = req.params.id;
    const task = await Task.findByPk(id, { raw: true });
    res.render('edit', { task });
  },

  async updateTask(req, res) {
    const id = req.body.id;
    await Task.update(
      {
        title: req.body.title,
        description: req.body.description,
        done: req.body.done === 'on' ? true : false,
        priority: req.body.priority,
        dueDate: req.body.dueDate
      },
      { where: { id: id } }
    );
    res.redirect('/tasks');
  },

  async deleteTask(req, res) {
    const id = req.body.id;
    await Task.destroy({ where: { id: id } }); 
    res.redirect('/tasks');
  },
};