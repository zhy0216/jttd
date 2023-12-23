import { NodeEmitter } from "~/codegen/types.ts";
import ts from "typescript";
import { Type } from "~/types.ts";
import { LiteralEmitter } from "~/codegen/literal.ts";

export class TypeAliasEmitter extends NodeEmitter<ts.TypeAliasDeclaration> {
  emit = () => {
    const name = this.node.name.getText();

    if (this.node.type.kind === ts.SyntaxKind.LiteralType) {
      const schema = new LiteralEmitter({
        node: this.node.type as ts.LiteralTypeNode,
        checker: this.checker,
      }).emit();

      return { ...schema, $name: name };
    }

    throw new Error(`wrong Node: ${this.node}`);
  };
}
