const { Router } = require("express");
const {
  getAll,
  newCustomer,
  updateCustomer
} = require("../controllers/customer");

const router = Router();

router.get("/all", getAll);
router.post("/new", newCustomer);
router.patch("/update", updateCustomer);

module.exports = router;
