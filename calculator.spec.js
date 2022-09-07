const add = require("./calculator");

test("Returns 0 for empty String", () => {
  expect(add("")).toBe(0);
});

test("Returns Answer after all numbers in input string", () => {
  expect(add("1,2,3")).toBe(6);
});

test("Returns Answer after considering alphabets in input string", () => {
  expect(add("1,2,3,a,b")).toBe(9);
});
test("Throws error if negative number exists in input string", () => {
  expect(() => add("1,2,-3")).toThrow("Negatives not allowed -3");
});

test("Throws error if multiple negative numbers exists in input string", () => {
  expect(() => add("1,-2,-3")).toThrow("Negatives not allowed -2 -3");
});

test("Considers only numbers less than 1000", () => {
  expect(add("1,1001,2")).toBe(3);
});
