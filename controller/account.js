import Account from "../models/Account.js";
import bcrypt from "bcryptjs";
import passport from "passport";

export const Register = async (req, res, next) => {
  // 클라이언트에서 날린 정보 추출
  const { username, email, password } = req.body;

  let result = {
    ok: null,
    error: null,
  };

  const existingUser = await Account.findOne({
    email,
  });

  if (existingUser != null) {
    result = {
      ok: false,
      error: "이미 존재하는 이메일입니다.",
    };
  } else {
    try {
      const hash = bcrypt.hashSync(password, 12);
      const user = await new Account({
        username,
        email,
        password: hash,
      });
      await Account.register(user, password);

      result = {
        ok: true,
        error: null,
      };
      console.log(result);

      // next();
    } catch (err) {
      console.log(err);
      result = {
        ok: false,
        error: err.message,
      };
    }
  }
  console.log(result);
  res.json(result);
};

export const postLogin = passport.authenticate("local", {
  successRedirect: "/routes/login_success",
  failureRedirect: "/routes/login_fail",
});

export const Login = async (req, res) => {
  const { email, password } = req.body;
  let result = {
    ok: null,
    username: null,
    error: null,
  };

  const existingUser = await Account.findOne({
    email,
  });

  if (existingUser != null) {
    if (bcrypt.compareSync(password, existingUser.password)) {
      result = {
        ok: true,
        username: existingUser.username,
        error: null,
      };
    } else {
      result = {
        ok: false,
        error: "비밀번호가 틀렸습니다.",
      };
    }
  } else {
    result = {
      ok: false,
      error: "없는 아이디 입니다.",
    };
  }
  res.json(result);
};

export const logout = (req, res, next) => {
  console.log("logout");
  req.logout();
  res.json("logout");
};

export const loginCheck = (req, res, next) => {};
