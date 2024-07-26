const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const taskModel = require("./models/task.js");
const taskRouter = require("./routes/task.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use("/tasks", taskRouter);

const Port = process.env.PORT || 7000;

mongoose
  .connect("mongodb://localhost:27017/todo", {})
  .then(() => console.log("DB connected...."))
  .catch(() => console.log("Failed to connect to DB...."));

// get all tasks
app.get("/", async (req, res) => {
  try {
    let tasksArray = await taskModel.find({});
    res.render("tasks/index.ejs", { tasks: tasksArray });
  } catch (error) {
    console.error("Error in getting tasks", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(Port, () => {
  console.log(`The Server is listening on port ${Port}`);
});
