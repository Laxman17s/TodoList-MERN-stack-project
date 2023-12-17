const express = require("express");
const router = express.Router();

const {
  getTodo,
  createTodo,
  deleteTodo,
  toggleTodostatus,
} = require("../controller/TodoController");

router.get("/todos", getTodo);
router.post("/todo/new", createTodo);
router.delete("/todo/delete/:id", deleteTodo);
router.get("/todo/:id", toggleTodostatus);

module.exports = router;
