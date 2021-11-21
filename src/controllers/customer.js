const openpay = require("../helpers/openpay");

const getAll = async (req, res) => {
  try {
    const result = await openpay.customerList();
    return res
      .status(200)
      .json({ ok: true, mssg: "customerList", response: result.response });
  } catch (error) {
    return res.status(400).json({ ok: false, mssg: "customerList", error });
  }
};

const newCustomer = async (req, res) => {
  const customerData = req.body;

  try {
    const result = await openpay.customerCreate(customerData);
    return res
      .status(200)
      .json({ ok: true, mssg: "newCustomer", response: result.response });
  } catch (error) {
    return res.status(400).json({ ok: false, mssg: "newCustomer", error });
  }
};

const updateCustomer = async (req, res) => {
  const customerId = req.params.customerId;
  const customerData = req.body;

  try {
    const result = await openpay.customerUpdate(customerId, customerData);
    return res.status(200).json({ ok: true, mssg: "updateCustomer", result });
  } catch (error) {
    return res.status(400).json({ ok: false, mssg: "updateCustomer", error });
  }
};

module.exports = {
  getAll,
  newCustomer,
  updateCustomer
};
