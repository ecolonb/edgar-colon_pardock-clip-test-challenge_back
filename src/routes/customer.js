const { Router } = require("express");
const { validateCreateOrUpdate } = require("../validators/customer");

const {
  getAll,
  newCustomer,
  updateCustomer
} = require("../controllers/customer");

const router = Router();

router.get("/all", getAll);
router.post("/new", validateCreateOrUpdate, newCustomer);
router.patch("/update/:customerId", updateCustomer);

module.exports = router;
