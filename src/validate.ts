import { ArraySchema, ObjectSchema, Schema, Type } from "./types";

/**
 * use jttd schema to validate object
 * TODO: defined error message
 */
export const validate = <T>(schema: Schema, obj: any): obj is T => {
  switch (schema.type) {
    case Type.literal:
      return schema.value === obj;
    case Type.union:
      return schema.members.some((s) => validate(s, obj));
    case Type.object: {
      if (obj == null) return false;
      return Object.entries((schema as ObjectSchema).members).every(
        ([key, s]) => validate(s, obj[key]),
      );
    }
    case Type.array:
      if (Array.isArray(obj)) {
        return obj.every((o) =>
          validate((schema as ArraySchema).elementType, o),
        );
      }

      return false;
    case Type.null:
      return obj === null;
    case Type.undefined:
      return obj === undefined;
    case Type.number:
      return typeof obj == "number";
    case Type.boolean:
      return obj === true || obj === false;
    case Type.string:
      return typeof obj === "string";
    default:
      const exhaustiveCheck: never = schema;
      throw new Error(`Unhandled case: ${exhaustiveCheck}`);
  }
};
