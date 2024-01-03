import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

const union1Schema = genFromFixture("union1.ts");
const union2Schema = genFromFixture("union2.ts");

test("union validation with 1", () => {
  expect(validate(union1Schema, 1)).toBeTrue();
});

test("union validation with boolean", () => {
  expect(validate(union1Schema, false)).toBeTrue();
});

test("union validation with string", () => {
  expect(validate(union1Schema, "")).toBeFalse();
});

test("union validation with boolean[]", () => {
  expect(validate(union2Schema, [true])).toBeTrue();
});

test("union validation with number", () => {
  expect(validate(union2Schema, [1])).toBeFalse();
});

test("union validation with number", () => {
  expect(validate(union2Schema, 1)).toBeTrue();
});

test("union validation with error", () => {
  expect(validate(union2Schema, "wrong")).toBeFalse();
});
