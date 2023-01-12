const { Format } = require("../index");

// Unit Test NodeJS

test("OnlyNumbers", () => {
  const result = Format.OnlyNumbers("Bruno1234Teste");
  expect(result).toEqual("1234");
});
