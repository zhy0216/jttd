import ts from "typescript";
import { Schema, Type, UnionSchema } from "~/types.ts";
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

  if (typeKind === ts.SyntaxKind.StringKeyword) {
    return { type: Type.string };
  }

  if (typeKind === ts.SyntaxKind.LiteralType) {
    const schema = new LiteralEmitter({
      node: typeNode as ts.LiteralTypeNode,
      checker: option.checker,
    }).emit();

    return { ...schema } as Schema;
  }

  if (typeKind === ts.SyntaxKind.ArrayType) {
    const schema = getSchemaByTypeNode(
      (typeNode as ts.ArrayTypeNode).elementType,
      option,
    );

    return { type: Type.array, elementType: schema };
  }

  if (typeKind === ts.SyntaxKind.TypeLiteral) {
    const members: Record<string, Schema> = {};

    for (const propertySig of (typeNode as ts.TypeLiteralNode).members) {
      if (ts.isPropertySignature(propertySig)) {
        if (
          propertySig.name?.kind === ts.SyntaxKind.Identifier &&
          propertySig.type
        ) {
          members[propertySig.name.getText()] = getSchemaByTypeNode(
            propertySig.type,
            option,
          );
        }
      }
    }

    return { type: Type.object, members };
  }

  if (ts.isUnionTypeNode(typeNode)) {
    return {
      type: Type.union,
      members: typeNode.types.map((t) => getSchemaByTypeNode(t, option)),
    };
  }

  if (ts.isIntersectionTypeNode(typeNode)) {
    return {
      type: Type.intersection,
      members: typeNode.types.map((t) => getSchemaByTypeNode(t, option)),
    };
  }

  throw new Error(`wrong Node: ${typeKind}`);
};
