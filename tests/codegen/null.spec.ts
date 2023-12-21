import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";

test("null.ts", () => {
  expect(genFromFixture("null.ts")).toMatchSnapshot();
  expect(genFromFixture("null.ts")).toMatchSnapshot();
});

test("null222.ts", () => {
  expect(genFromFixture("null.ts")).toMatchSnapshot();
  expect(genFromFixture("null.ts")).toMatchSnapshot();
});
