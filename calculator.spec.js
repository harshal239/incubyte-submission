const add = require("./calculator");

test("Returns 0 for empty String", () => {
  expect(add("")).toBe(0);
});

test("Returns Answer after all numbers in input string", () => {
  expect(add("1,2,3")).toBe(6);
});
