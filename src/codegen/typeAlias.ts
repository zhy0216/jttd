import { NodeEmitter } from "~/codegen/types.ts";
import ts from "typescript";
import { Type } from "~/types.ts";
import { LiteralEmitter } from "~/codegen/literal.ts";
import { getSchemaByTypeNode } from "~/codegen/helpers.ts";

export class TypeAliasEmitter extends NodeEmitter<ts.TypeAliasDeclaration> {
  emit = () => {
    const name = this.node.name.getText();

    const schema = getSchemaByTypeNode(this.node.type, {
      checker: this.checker,
    });

    return { ...schema, $name: name };
  };
}
