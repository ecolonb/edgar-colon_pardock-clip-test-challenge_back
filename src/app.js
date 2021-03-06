const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const dbConnection = require("./config/database");

const app = express();
app.use(morgan(process.env.MORGAN || "tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dbConnection();

app.get("/", (req, res) => {
  return res.send("Server ok");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/customer", require("./routes/customer"));

module.exports = app;
