import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

test("string validation with string", () => {
  const stringSchema = genFromFixture("string.ts");
  expect(validate(stringSchema, "")).toBeTrue();
});

test("string validation with string", () => {
  const stringSchema = genFromFixture("string.ts");
  expect(validate(stringSchema, "1111")).toBeTrue();
});

test("string validation with error", () => {
  const stringSchema = genFromFixture("string.ts");
  expect(validate(stringSchema, null)).toBeFalse();
});
