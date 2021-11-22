const customerData = {
  name: "John3",
  email: "johndoe3@example.com",
  last_name: "Doe3",
  address: {
    city: "Queretaro",
    state: "Queretaro",
    line1: "Calle Morelos no 10",
    line2: "col. san pablo",
    postal_code: "76000",
    country_code: "MX"
  },
  phone_number: "44209087654"
};
const email = process.env.EMAIL_TEST;
const password = process.env.PASSWORD_TEST;

module.exports = { customerData, email, password };
