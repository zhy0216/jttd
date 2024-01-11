import { NodeEmitter } from "~/codegen/types.ts";
import ts from "typescript";
import { getSchemaByTypeNode } from "~/codegen/helpers.ts";

export class EnumEmitter extends NodeEmitter<ts.EnumDeclaration> {
  emit = () => {
    const name = this.node.name.getText();

    // const schema = getSchemaByTypeNode(this.node.type, {
    //   checker: this.checker,
    // });

    return { ...schema, $name: name };
  };
}
