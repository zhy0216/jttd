import { Schema } from "~/types";
import path from "path";
import fs from "fs";
import { codegen } from "~/codegen";

export const genFromFixture = (name: string): Schema => {
  const projectRoot = import.meta.dir.split(path.sep).slice(0, -1);
  const fixturePath = [...projectRoot, "fixtures", name].join(path.sep);
  const sourceCode = fs.readFileSync(fixturePath, {
    encoding: "utf8",
    flag: "r",
  });

  return codegen(sourceCode)[0];
};
