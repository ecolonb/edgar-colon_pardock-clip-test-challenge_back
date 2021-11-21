const getAll = (req, res) => {
  return res.status(200).json({ ok: true, clients: [] });
};

const newCustomer = (req, res) => {
  return res.status(200).json({ ok: true, mssg: "newCustomer" });
};

const updateCustomer = (req, res) => {
  return res.status(200).json({ ok: true, mssg: "updateCustomer" });
};

module.exports = {
  getAll,
  newCustomer,
  updateCustomer
};
