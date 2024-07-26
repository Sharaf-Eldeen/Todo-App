const express = require("express");
const router = express.Router();
const taskModel = require("../models/task.js");
const taskController = require("../controllers/task.js");

// get  task by id
router.get("/show/:id", taskController.getTaskById);

// add new task
router.post("/add", taskController.addTask);

// delete task
router.delete("/delete/:id", taskController.deleteTask);

// update task
router.put("/edit/:id", taskController.updateTask);

module.exports = router;
