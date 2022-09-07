const add = require("./calculator");

test("Returns 0 for empty String", () => {
  expect(add("")).toBe(0);
});
