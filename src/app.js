const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello world!");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/customer", require("./routes/customer"));

module.exports = app;
