import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

test("object validation with valid object", () => {
  const objectSchema = genFromFixture("object.ts");
  expect(validate(objectSchema, { a: 1, b: false })).toBeTrue();
});

test("object validation with object", () => {
  const objectSchema = genFromFixture("object.ts");
  expect(validate(objectSchema, {})).toBeFalse();
});

test("object validation with error", () => {
  const objectSchema = genFromFixture("object.ts");
  expect(validate(objectSchema, { a: 1, b: false, c: "test" })).toBeTrue();
});
