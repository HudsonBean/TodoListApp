//Modules
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//Variables
const app = express();

//Functions

//Main

//Middleware
app.use(express.json());
app.use(cors());

//Start database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(console.error);

//Start server
app.listen(process.env.PORT);

//Models
const dev = require("./models/dev");
const todos = require("./models/todos");

//Routing
//dev
app.get("/dev", async (req, res) => {
  //Get data
  const data = await dev.find();
  //Response
  res.status(202).json(data);
});
//todos
app.get("/todos", async (req, res) => {
  //Get data
  const data = await todos.find();
  //Response
  res.status(202).json(data);
});
app.post("/todos/new", (req, res) => {
  //Post data
  const data = new todos({
    todo: req.body.todo,
  });
  data.save();
  //Response
  res.status(201).json(data);
});
app.get("/todos/:id", async (req, res) => {
  //Get data
  const data = await todos.findOne({ _id: req.params.id });
  //Response
  res.status(202).json(data);
});
app.delete("/todos/delete", async (req, res) => {
  //Delete data
  const data = await todos.deleteMany();
  //Response
  res.status(202).json(data);
});
app.delete("/todos/delete/:id", async (req, res) => {
  //Delete data
  const data = await todos.deleteOne({ _id: req.params.id });
  //Response
  res.status(202).json(data);
});
