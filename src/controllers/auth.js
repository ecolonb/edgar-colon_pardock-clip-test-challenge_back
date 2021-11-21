const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { createAccessToken } = require("../helpers/jwt");

const signUp = async (req, res = response) => {
  try {
    const { password, ...payload } = req.body;
    const user = new User(payload);
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    const savedUser = await user.save();
    const accessToken = await createAccessToken(savedUser._id);

    return res
      .status(201)
      .json({ ok: true, mssg: "Success", user: savedUser, accessToken });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      mssg: "Error signUp",
      errors: error.errors || error.message
    });
  }
};
const errorResponse = (res) => {
  return res.status(400).json({
    ok: false,
    message: "Wrong email or password"
  });
};

const signIn = async (req, res = response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return errorResponse(res);

    const isValidPassword = await bcrypt.compareSync(password, user.password);
    if (!isValidPassword) return errorResponse(res);

    const token = await createAccessToken(user._id);

    return res.status(200).json({ ok: true, mssg: "signIn", user, token });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      mssg: "Error signIn",
      errors: error.errors || error.message
    });
  }
};

module.exports = {
  signUp,
  signIn
};
