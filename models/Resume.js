import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Resume = new Schema(
  {
    wrieter: {
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
    content: {
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

export default mongoose.model("resume", Resume);
