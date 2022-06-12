import express from "express";
import Board from "../models/Board.js";
const router = express.Router();

router.post("/delete", async (req, res) => {
  try {
    await Board.remove({
      _id: req.body._id,
    });
    res.json({ message: true });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/update", async (req, res) => {
  try {
    await Board.update(
      { _id: req.body._id },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
        },
      }
    );
    res.json({ message: "게시글이 수정 되었습니다." });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/write", async (req, res) => {
  try {
    let obj;
    obj = {
      writer: req.body.username,
      title: req.body.title,
      content: req.body.content,
    };
    console.log(obj);

    const board = new Board(obj);
    await board.save();
    res.json({ message: "게시글이 업로드 되었습니다." });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.get("/getBoardList", async (req, res) => {
  let result = {
    ok: null,
    data: null,
    error: null,
  };
  try {
    const _id = req.body._id;
    const board = await Board.find({
      sort: { createdAt: -1 },
    });
    result.ok = true;
    result.data = board;
    res.json(result);
  } catch (err) {
    result.ok = false;
    result.error = err;
    console.log(err);
    res.json(result);
  }
});

router.post("/detail", async (req, res) => {
  try {
    const _id = req.body._id;
    const board = await Board.find({ _id });
    res.json({ board });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

export default router;
