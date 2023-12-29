import ts from "typescript";
import { Schema, Type } from "~/types.ts";
import { LiteralEmitter } from "~/codegen/literal.ts";

export const getSchemaByTypeNode = (
  typeNode: ts.TypeNode,
  option: { checker: ts.TypeChecker },
): Schema => {
  const typeKind = typeNode.kind;
  if (typeKind === ts.SyntaxKind.NumberKeyword) {
    return { type: Type.number };
  }

  if (typeKind === ts.SyntaxKind.UndefinedKeyword) {
    return { type: Type.undefined };
  }

  if (typeKind === ts.SyntaxKind.BooleanKeyword) {
    return { type: Type.boolean };
  }

  if (typeKind === ts.SyntaxKind.LiteralType) {
    const schema = new LiteralEmitter({
      node: typeNode as ts.LiteralTypeNode,
      checker: option.checker,
    }).emit();

    return { ...schema };
  }

  if (typeKind === ts.SyntaxKind.ArrayType) {
    const schema = getSchemaByTypeNode(
      (typeNode as ts.ArrayTypeNode).elementType,
      option,
    );

    return { type: Type.array, elementType: schema };
  }

  throw new Error(`wrong Node: ${typeKind}`);
};
