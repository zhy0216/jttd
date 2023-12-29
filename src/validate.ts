import { Schema, Type } from "./types";

/**
 * use jttd schema to validate object
 * TODO: defined error message
 */
export const validate = <T>(schema: Schema, obj: any): obj is T => {
  switch (schema.type) {
    case Type.array:
      return false; // TODO
    case Type.null:
      return obj === null;
    case Type.undefined:
      return obj === undefined;
    case Type.number:
      return typeof obj == "number";
    case Type.boolean:
      return obj === true || obj === false;
    default:
      const exhaustiveCheck: never = schema;
      throw new Error(`Unhandled color case: ${exhaustiveCheck}`);
  }
};
