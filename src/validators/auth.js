const { checkSchema } = require("express-validator");
const { validateResult } = require("../helpers/validate-result");

const commonSchema = {
  email: {
    exists: {
      errorMessage: "email is required"
    },
    isEmail: {
      errorMessage: "Invalid email format"
    }
  },
  password: {
    exists: {
      errorMessage: "password is required"
    },
    isLength: {
      errorMessage: "password should be at least 6 chars long",
      options: { min: 6 }
    }
  }
};

const validateSignUp = [
  checkSchema({
    name: {
      exists: {
        errorMessage: "name is required"
      },
      isLength: {
        errorMessage: "name should be at least 3 chars long",
        options: { min: 3 }
      }
    },
    lastName: {
      exists: {
        errorMessage: "lastName is required"
      },
      isLength: {
        errorMessage: "lastName should be at least 3 chars long",
        options: { min: 3 }
      }
    },
    ...commonSchema
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

const validateSignIn = [
  checkSchema({ ...commonSchema }),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

module.exports = { validateSignUp, validateSignIn };
