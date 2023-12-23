import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

test("null validation with null", () => {
  const nullSchema = genFromFixture("null.ts");
  expect(validate(nullSchema, null)).toBeTrue();
});

test("null validation with error", () => {
  const nullSchema = genFromFixture("null.ts");
  expect(validate(nullSchema, "wrong")).toBeFalse();
});
