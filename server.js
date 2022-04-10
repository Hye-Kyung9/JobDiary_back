import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import sesison from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js";

const server = express();
dotenv.config();

server.use(express.json());
server.use(cors()); //리액트와 nodejs 서버간 ajax 요청
server.use(cookieParser()); // 토큰을 쿠키에 저장하기 위해 사용

server.use("/routes", routes);

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
