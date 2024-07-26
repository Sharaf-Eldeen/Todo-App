const taskModel = require("../models/task.js");

const getTaskById = async (req, res) => {
  try {
    let task = await taskModel.findById(req.params.id);
    res.render("tasks/show.ejs", { task: task });
  } catch (error) {
    console.error("Error in getting tasks", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const addTask = async (req, res) => {
  let newTask = new taskModel({ todo: req.body.todo });
  try {
    await newTask.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error in saving new task", error.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    await taskModel.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.error(" Error in deleting task : ", error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    await taskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.redirect("/");
  } catch (error) {
    console.error("Error in update task", error.message);
  }
};

module.exports = { getTaskById, addTask, deleteTask, updateTask };
