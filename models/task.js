const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  todo: { type: String, required: true, unique: true },
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;
