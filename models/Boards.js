import mongoose from "mongoose";

const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    createdAt: {
      // 글을 생성한 날짜
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Board = mongoose.model("Board", boardSchema);

module.exports = { Board };