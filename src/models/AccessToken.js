const { Schema, model } = require("mongoose");

const accessToken = Schema({
  token: {
    type: String,
    require: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  expireIn: {
    type: Date,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model("AccessToken", accessToken, "accessTokens");
