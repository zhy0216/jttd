import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import { validate } from "~/validate.ts";

const literal1Schema = genFromFixture("literal1.ts");
const literal2Schema = genFromFixture("literal2.ts");
const literal3Schema = genFromFixture("literal3.ts");
const literal4Schema = genFromFixture("literal4.ts");

test("literal1 validation with 1", () => {
  expect(validate(literal1Schema, 1)).toBeTrue();
});

test("literal2 validation with '2'", () => {
  expect(validate(literal2Schema, "2")).toBeTrue();
});

test("literal3 validation with true", () => {
  expect(validate(literal3Schema, true)).toBeTrue();
});

test("literal4 validation with false", () => {
  expect(validate(literal4Schema, false)).toBeTrue();
});
