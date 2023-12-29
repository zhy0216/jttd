import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

const array1Schema = genFromFixture("array1.ts");
const array2Schema = genFromFixture("array2.ts");

test("array validation with array", () => {
  expect(validate(array1Schema, [1])).toBeTrue();
});

test("array validation with array", () => {
  expect(validate(array1Schema, [[]])).toBeFalse();
});

test("array validation with array", () => {
  expect(validate(array2Schema, [[NaN]])).toBeTrue();
});

test("array validation with array", () => {
  expect(validate(array2Schema, [])).toBeTrue();
});

test("array validation with array", () => {
  expect(validate(array2Schema, [[]])).toBeTrue();
});

test("array validation with error", () => {
  expect(validate(array2Schema, "wrong")).toBeFalse();
});
