require("./src/helpers/load-env")();
const app = require("./src/app");

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
