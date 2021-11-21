const singUp = (req, res) => {
  return res.status(200).json({ ok: true, mssg: "singUp" });
};

const singIn = (req, res) => {
  return res.status(200).json({ ok: true, mssg: "singIn" });
};

module.exports = {
  singUp,
  singIn
};
