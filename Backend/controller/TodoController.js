const Todo = require("../models/TodoModel");

const getTodo = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });

  todo.save();

  res.json(todo);
};

const deleteTodo = async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  const todos = await Todo.find({});
  res.json(todos);
};
const toggleTodostatus = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  const todos = await Todo.find({});
  res.json(todos);
};

module.exports = {
  getTodo,
  createTodo,
  deleteTodo,
  toggleTodostatus,
};
