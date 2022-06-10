// import router from "express";
import express from "express";
import Event from "../models/Event.js";
import moment from "moment";

const router = express.Router();

router.post("/create-event", async (req, res) => {
  if (req.body["end"] == null) {
    req.body["end"] = req.body.start;
  }

  const event = Event(req.body);
  await event.save();
  res.sendStatus(201);
});

router.get("/get-events", async (req, res) => {
  const events = await Event.find({
    start: { $gte: moment(req.query.start).toDate() },
    end: { $lte: moment(req.query.end).toDate() },
  });
  res.send(events);
});

router.get("/remove-event", async (req, res) => {
  await Event.deleteOne({ id: req.query.id });
  res.sendStatus(201);
});

export default router;
