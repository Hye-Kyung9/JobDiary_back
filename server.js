import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import passport from "passport";
import "./passport/index.js";
import MongoStore from "connect-mongo";
// const MongoStore = require("connect-mongo")(session);
import fileupload from "express-fileupload";
import calendar from "./controller/calendar.js";

dotenv.config();

const server = express();
//middleware처리
server.use(passport.initialize());
server.use(passport.session());
server.use("/routes", routes);

server.use(express.json());
server.use(cors()); //리액트와 nodejs 서버간 ajax 요청
server.use(bodyParser.json()); //데이터를 주고받을때 json 형식 사용
server.use(cookieParser(process.env.COOKIE_ID)); // 세션과 쿠키 미들웨어

server.use(fileupload());
server.use(express.static("files"));

server.use("/api/calendar", calendar);

server.use(
  session({
    secret: process.env.COOKIE_ID,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://root:1111@cluster0.5x7gd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    }),
    cookie: {
      httpOnly: true, // js 코드로 쿠키를 가져오지 못하게
      // secure: false, // https 에서만 가져오도록 할 것인가?
    },
  })
);

server.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  } else {
    mongoose.connect(
      process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Connection Successful Port:4000");
        }
      }
    );
  }
});

server.post("/fileUpload", (req, res) => {
  let saveFilepath = path.join(__dirname, "react-project", "build", "/");
  let file = req.files.file;
  let fileName = file.name;

  file.mv(saveFilepath + fileName, (err) => {
    if (err) {
      res.status(500).send({ message: "파일전송실패", code: 500 });
    }
    res.status(200).send({ message: "파일전송성공", code: 200 });
  });
});
