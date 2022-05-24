import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Schema = mongoose.Schema;

const Account = new Schema({
  username: {
    type: String,
    // thumbnail: { type: String, default: '/static/images/default_thumbnail.png' },
    required: true,
  },
  // 소셜 계정으로 회원가입을 할 경우에는 각 서비스에서 제공되는 id 와 accessToken 을 저장
  social: {
    google: {
      clientId: String,
      accessToken: String,
    },
  },
  email: {
    type: String,
    required: true,
    trim: true, //공백 없애줌
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//passportLocalMongoose 적용함.
Account.plugin(passportLocalMongoose, {
  usernameField: "email",
});

const model = mongoose.model("Account", Account);
export default model;
