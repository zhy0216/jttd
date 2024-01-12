import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

const intersectionSchema = genFromFixture("intersection1.ts");

test("intersection validation with object", () => {
  expect(validate(intersectionSchema, { a: 1, b: false })).toBeTrue();
});

test("intersection validation with extra props", () => {
  expect(validate(intersectionSchema, { a: 1, b: false, c: 1 })).toBeTrue();
});

test("intersection validation with missing props", () => {
  expect(validate(intersectionSchema, { a: 1 })).toBeFalse();
});
