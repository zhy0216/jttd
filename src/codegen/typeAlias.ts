import { NodeEmitter } from "~/codegen/types.ts";
import ts from "typescript";
import { Type } from "~/types.ts";
import { LiteralEmitter } from "~/codegen/literal.ts";

export class TypeAliasEmitter extends NodeEmitter<ts.TypeAliasDeclaration> {
  emit = () => {
    const name = this.node.name.getText();
    const typeKind = this.node.type.kind;

    // KeywordTypeSyntaxKind

    if (typeKind === ts.SyntaxKind.NumberKeyword) {
      return { type: Type.number, $name: name };
    }

    if (typeKind === ts.SyntaxKind.UndefinedKeyword) {
      return { type: Type.undefined, $name: name };
    }

    if (typeKind === ts.SyntaxKind.BooleanKeyword) {
      return { type: Type.boolean, $name: name };
    }

    if (typeKind === ts.SyntaxKind.LiteralType) {
      const schema = new LiteralEmitter({
        node: this.node.type as ts.LiteralTypeNode,
        checker: this.checker,
      }).emit();

      return { ...schema, $name: name };
    }

    if (typeKind === ts.SyntaxKind.ArrayType) {
    }

    throw new Error(`wrong Node: ${this.node}`);
  };
}
