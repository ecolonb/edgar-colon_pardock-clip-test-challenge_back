const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = Schema({
  name: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: false
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

userSchema.set("toJSON", {
  transform: function (doc, ret, opt) {
    delete ret["password"];
    return ret;
  }
});

userSchema.plugin(uniqueValidator);

module.exports = model("User", userSchema);
