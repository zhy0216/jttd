import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

test("undefined validation with undefined", () => {
  const nullSchema = genFromFixture("undefined.ts");
  expect(validate(nullSchema, undefined)).toBeTrue();
});

test("undefined validation with error", () => {
  const nullSchema = genFromFixture("undefined.ts");
  expect(validate(nullSchema, "wrong")).toBeFalse();
});
