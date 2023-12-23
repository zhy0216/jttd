import ts from "typescript";
import { Schema } from "~/types.ts";

export abstract class NodeEmitter<T = ts.Node> {
  checker: ts.TypeChecker;
  node: T;
  constructor({ checker, node }: { checker: ts.TypeChecker; node: T }) {
    this.checker = checker;
    this.node = node;
  }

  abstract emit: () => Schema;
}
