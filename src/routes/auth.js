const { Router } = require("express");
const { signIn, signUp } = require("../controllers/auth");
const { validateSignUp, validateSignIn } = require("../validators/auth");

const router = Router();

router.post("/signup", validateSignUp, signUp);
router.post("/signin", validateSignIn, signIn);

module.exports = router;
