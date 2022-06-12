import mongoose from "mongoose";

const Schema = mongoose.Schema;

const boardSchema = new Schema({
  writer: {
    type: String,
    required: true,
    ref: "Account",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
  },
});

const Board = mongoose.model("Board", boardSchema);
export default Board;
