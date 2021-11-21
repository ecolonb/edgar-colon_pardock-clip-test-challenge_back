const jwt = require("jsonwebtoken");
const AccessToken = require("../models/AccessToken");
const EXPIRE_IN = Number(process.env.TOKEN_EXPIRE_IN) || 3600;
const SECRET = process.env.SECRET_JWT;

const registerAccessToken = async (token, userId, expireIn) => {
  try {
    const accessToken = new AccessToken({ token, userId, expireIn });
    await accessToken.save();
    return true;
  } catch {
    return false;
  }
};

const createAccessToken = async (userId) => {
  try {
    const now = new Date();
    const UUID = now.getTime();
    const token = await jwt.sign({ UUID }, SECRET, {
      expiresIn: EXPIRE_IN
    });
    const expireIn = new Date(now.getTime() + EXPIRE_IN * 1000);
    await registerAccessToken(token, userId, expireIn);
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createAccessToken
};
