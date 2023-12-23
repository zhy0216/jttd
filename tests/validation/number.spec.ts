import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

test("number validation with number", () => {
  const numberSchema = genFromFixture("number.ts");
  expect(validate(numberSchema, 1)).toBeTrue();
});

test("number validation with number", () => {
  const numberSchema = genFromFixture("number.ts");
  expect(validate(numberSchema, NaN)).toBeTrue();
});

test("number validation with error", () => {
  const numberSchema = genFromFixture("number.ts");
  expect(validate(numberSchema, "wrong")).toBeFalse();
});
