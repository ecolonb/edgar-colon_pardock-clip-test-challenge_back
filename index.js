const dotenv = require("dotenv");
const app = require("./src/app");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
