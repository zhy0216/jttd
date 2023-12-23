import { test, expect } from "bun:test";
import { genFromFixture } from "tests/helpers.ts";
import path from "path";
import fs from "fs";

const projectRoot = import.meta.dir.split(path.sep).slice(0, -2);
const fixturePath = [...projectRoot, "fixtures"].join(path.sep);

fs.readdirSync(fixturePath).forEach((fileName) => {
  test(fileName, () => {
    expect(genFromFixture(fileName)).toMatchSnapshot();
  });
});
