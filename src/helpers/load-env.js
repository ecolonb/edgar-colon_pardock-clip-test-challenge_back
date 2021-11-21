const dotenv = require("dotenv");
const load = () => {
  if (process.env.NODE_ENV !== "production") {
    dotenv.config();
  }
};
module.exports = load;
