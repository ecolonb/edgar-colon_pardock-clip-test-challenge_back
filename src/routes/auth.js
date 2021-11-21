const { Router } = require("express");
const { singIn, singUp } = require("../controllers/auth");

const router = Router();

router.post("/singup", singUp);
router.post("/singin", singIn);

module.exports = router;
