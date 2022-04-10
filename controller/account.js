import Account from "../models/account.js";

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
      const user = await new Account({
        username,
        email,
        password,
      }).save();
      result = {
        ok: true,
        error: null,
      };
    } catch (err) {
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
    if (password === existingUser.password) {
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
