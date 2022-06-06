import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventShema = new Schema({
  start: Date,
  end: Date,
  title: String,
});

const Event = mongoose.model("Event", EventShema);

export default Event;
