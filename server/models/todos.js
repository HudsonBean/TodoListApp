const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todosSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
});

const todos = mongoose.model("todos", todosSchema);

module.exports = todos;
