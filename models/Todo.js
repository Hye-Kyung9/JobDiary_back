import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
