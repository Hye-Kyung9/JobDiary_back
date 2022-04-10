import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const Account = new Schema({
  username: {
    type: String,
    // thumbnail: { type: String, default: '/static/images/default_thumbnail.png' },
    required: true,
  },
  // 소셜 계정으로 회원가입을 할 경우에는 각 서비스에서 제공되는 id 와 accessToken 을 저장
  social: {
    kakao: {
      id: String,
      accessToken: String,
    },
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
  thoughtCount: { type: Number, default: 0 }, // 서비스에서 포스트를 작성 할 때마다 1씩 증가
  createdAt: { type: Date, default: Date.now }, //계정이 생성된 시간
  // {
  //   timestamps: true
  // }
});

Account.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, 8);
};

Account.methods.validateHash = (password) => {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model("account", Account);
