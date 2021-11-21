const { response, nextFunction } = require("express");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_JWT;

const validateJWT = async (req, res = response, next = nextFunction) => {
  try {
    const { authorization: bearerToken } = req.headers;
    if (!bearerToken)
      return res.status(400).json({
        ok: false,
        message: "Missing token"
      });
    await jwt.verify(bearerToken.replace("Bearer ", ""), SECRET);
    next();
  } catch (error) {
    return res.status(404).json({
      ok: false,
      message: "Bad token"
    });
  }
};

module.exports = { validateJWT };
