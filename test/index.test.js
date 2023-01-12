const { Format, Object } = require("../index");
// Unit Test NodeJS

test("OnlyNumbers", () => {
  const result = Format.OnlyNumbers("Bruno1234Teste");
  expect(result).toEqual("1234");
});

test("GetKeyByValue", () => {
  const result = Object.GetKeyByValue({ 1: "Bruno", 2: "Teste" }, "Bruno");
  expect(result).toEqual("1");
});

test("MergeObjects", () => {
  const result = Object.MergeObjects(
    { 1: "Bruno", 2: "Teste" },
    { 3: "Teste" }
  );
  expect(result).toEqual({ 1: "Bruno", 2: "Teste", 3: "Teste" });
});
