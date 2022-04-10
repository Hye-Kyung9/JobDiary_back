import Account from "../models/account.js";
import bcrypt from "bcryptjs";

export const Register = async (req, res) => {
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
      }).save();
      result = {
        ok: true,
        error: null,
      };
    } catch (err) {
      console.log(err);
      result = {
        ok: false,
        error: err.message,
      };
    }
  }

  res.json(result);
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  let result = {
    ok: null,
    error: null,
  };

  const existingUser = await Account.findOne({
    email,
  });

  if (existingUser != null) {
    if (bcrypt.compareSync(password, existingUser.password)) {
      result = {
        ok: true,
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
