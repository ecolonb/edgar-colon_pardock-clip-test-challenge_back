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
const customerDelete = (customerId) => {
  return new Promise((resolve, reject) => {
    openpay.customers.delete(customerId, function (error) {
      if (error) return reject({ error });
      return resolve(true);
    });
  });
};

module.exports = {
  customerList,
  customerCreate,
  customerUpdate,
  customerDelete
};
