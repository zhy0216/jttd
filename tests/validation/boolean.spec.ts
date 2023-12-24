import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

test("boolean validation with boolean", () => {
  const booleanSchema = genFromFixture("boolean.ts");
  expect(validate(booleanSchema, true)).toBeTrue();
});

test("boolean validation with boolean", () => {
  const booleanSchema = genFromFixture("boolean.ts");
  expect(validate(booleanSchema, false)).toBeTrue();
});

test("boolean validation with error", () => {
  const booleanSchema = genFromFixture("boolean.ts");
  expect(validate(booleanSchema, "wrong")).toBeFalse();
});
