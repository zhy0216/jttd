import { NodeEmitter } from "~/codegen/types.ts";
import ts from "typescript";
import { Type } from "~/types.ts";

export class LiteralEmitter extends NodeEmitter<ts.LiteralTypeNode> {
  emit = () => {
    if (this.node.literal.kind === ts.SyntaxKind.NullKeyword) {
      return { type: Type.null };
    }

    throw new Error(`LiteralEmitter: wrong type: ${this.node}`);
  };
}
