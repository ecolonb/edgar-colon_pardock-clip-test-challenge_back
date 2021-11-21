const { Router } = require("express");
const {
  validateCreateOrUpdate: validateInputs
} = require("../validators/customer");
const { validateJWT: checkAuth } = require("../middlewares/auth");

const {
  getAll,
  newCustomer,
  updateCustomer
} = require("../controllers/customer");

const router = Router();

router.get("/all", checkAuth, getAll);
router.post("/new", [checkAuth, ...validateInputs], newCustomer);
router.patch(
  "/update/:customerId",
  [checkAuth, ...validateInputs],
  updateCustomer
);

module.exports = router;
