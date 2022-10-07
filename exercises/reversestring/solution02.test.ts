import reverse02 from "./index";

test("Reverse function exists", () => {
  expect(reverse02).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse02("abcd")).toEqual("dcba");
});

test("Reverse reverses a string", () => {
  expect(reverse02("  abcd")).toEqual("dcba  ");
});
