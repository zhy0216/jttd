import { NodeEmitter } from "~/codegen/types.ts";
import ts from "typescript";
import { Schema, Type } from "~/types.ts";

export class LiteralEmitter extends NodeEmitter<ts.LiteralTypeNode> {
  emit = () => {
    const literal = this.node.literal;

    // TODO: this is literal in ts
    if (literal.kind === ts.SyntaxKind.NullKeyword) {
      return { type: Type.null } as Schema;
    }

    if (literal.kind === ts.SyntaxKind.NumericLiteral) {
      return { type: Type.literal, value: Number(literal.getText()) } as Schema;
    }

    if (literal.kind === ts.SyntaxKind.StringLiteral) {
      return {
        type: Type.literal,
        value: literal.getText().slice(1, -1),
      } as Schema;
    }

    if (literal.kind === ts.SyntaxKind.TrueKeyword) {
      return { type: Type.literal, value: true } as Schema;
    }

    if (literal.kind === ts.SyntaxKind.FalseKeyword) {
      return { type: Type.literal, value: false } as Schema;
    }

    throw new Error(`LiteralEmitter: wrong type: ${literal.kind}`);
  };
}
