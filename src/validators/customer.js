const { checkSchema } = require("express-validator");
const { validateResult } = require("../helpers/validate-result");

const validateCreateOrUpdate = [
  checkSchema({
    name: {
      exists: {
        errorMessage: "Name is required"
      },
      isLength: {
        errorMessage: "name has invalid length. Send max 100 characters",
        options: { min: 3, max: 100 }
      }
    },
    last_name: {
      optional: { options: { nullable: true } },
      isLength: {
        errorMessage: "last_name should be at max 100 chars long",
        options: { max: 100 }
      }
    },
    email: {
      exists: {
        errorMessage: "email is required"
      },
      isEmail: {
        errorMessage: "bad email format"
      }
    },
    address: {
      optional: { options: { nullable: true } },
      custom: {
        options: (value) => {
          const props = [
            "city",
            "state",
            "line1",
            "postal_code",
            "country_code"
          ];
          props.forEach((prop) => {
            if (!value.hasOwnProperty(prop))
              throw new Error(`${prop} is required`);
          });
          return true;
        }
      }
    },
    phone_number: {
      optional: { options: { nullable: true } },
      isLength: {
        errorMessage:
          "phone_number should be at (between 10 and 14 chars) long with area code",
        options: { min: 10, max: 14 }
      }
    }
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

module.exports = { validateCreateOrUpdate };
