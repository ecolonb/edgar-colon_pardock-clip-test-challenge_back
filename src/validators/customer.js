const { checkSchema } = require("express-validator");
const { validateResult } = require("../helpers/validate-result");

const validateCreateOrUpdate = [
  checkSchema({
    name: {
      exists: {
        errorMessage: "Name is required"
      },
      isLength: {
        errorMessage: "Name should be at least 3 chars long",
        options: { min: 3 }
      }
    },
    address: {
      optional: { options: { nullable: true } },
      custom: {
        options: (value, { req, location, path }) => {
          console.log("value: ", value);
          // throw new Error("Custom validation");
          return true;
        }
      }
    }
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

module.exports = { validateCreateOrUpdate };
