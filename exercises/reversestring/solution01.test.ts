import reverse01 from "./index";

test("Reverse function exists", () => {
  expect(reverse01).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse01("abcd")).toEqual("dcba");
});

test("Reverse reverses a string", () => {
  expect(reverse01("  abcd")).toEqual("dcba  ");
});
