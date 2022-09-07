const add = require("./calculator");

test("Returns functionality", () => {
  expect(add()).toBe("function returns addition of numbers");
});
