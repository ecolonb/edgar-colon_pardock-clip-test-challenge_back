const openpay = require("../helpers/openpay");

const customerList = () => {
  return new Promise((resolve, reject) => {
    openpay.customers.list(function (error, body, response) {
      if (error) return reject(error);
      return resolve({ response, body });
    });
  });
};

const customerCreate = (data) => {
  return new Promise((resolve, reject) => {
    openpay.customers.create(data, function (error, body, response) {
      if (error) return reject({ error });
      return resolve({ body, response });
    });
  });
};
const customerUpdate = (customerId, data) => {
  return new Promise((resolve, reject) => {
    openpay.customers.update(customerId, data, function (error, response) {
      if (error) return reject({ error });
      return resolve(response);
    });
  });
};

module.exports = {
  customerList,
  customerCreate,
  customerUpdate
};
