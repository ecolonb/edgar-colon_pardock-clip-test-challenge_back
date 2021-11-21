const {
  customerList,
  customerCreate,
  customerUpdate
} = require("../services/openpay");

const getAll = async (req, res) => {
  try {
    const { response } = await customerList();
    return res.status(200).json({
      ok: true,
      message: "success",
      items: [...response.body]
    });
  } catch (error) {
    return res.status(400).json({ ok: false, message: "error", error });
  }
};

const newCustomer = async (req, res) => {
  const customerData = req.body;

  try {
    const { response } = await customerCreate(customerData);
    return res
      .status(201)
      .json({ ok: true, message: "success", customer: { ...response.body } });
  } catch (error) {
    return res.status(400).json({ ok: false, message: "error", error });
  }
};

const updateCustomer = async (req, res) => {
  const customerId = req.params.customerId;
  const customerData = req.body;

  try {
    const result = await customerUpdate(customerId, customerData);
    return res.status(200).json({ ok: true, message: "success", result });
  } catch (error) {
    return res.status(400).json({ ok: false, message: "error", error });
  }
};

module.exports = {
  getAll,
  newCustomer,
  updateCustomer
};
