const Openpay = require("openpay");
const MERCHANT_ID = process.env.OPENPAY_MERCHANT_ID || "";
const PRIVATE_KEY = process.env.OPENPAY_PRIVATE_KEY || "";

const openpay = new Openpay(MERCHANT_ID, PRIVATE_KEY);

module.exports = openpay;
