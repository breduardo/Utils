const GetKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const Format = require("./Format");
const Date = require("./Date");

module.exports = {
  Format,
  Validate: require("./Validate"),
  GetKeyByValue,
  Date,
};
