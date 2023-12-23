import { Schema, Type } from "./types";

/**
 * use jttd schema to validate object
 * TODO: defined error message
 */
export const validate = <T>(schema: Schema, obj: any): obj is T => {
  switch (schema.type) {
    case Type.null:
      return obj === null;
    case Type.undefined:
      return obj === undefined;

    default:
      const exhaustiveCheck: never = schema.type;
      throw new Error(`Unhandled color case: ${exhaustiveCheck}`);
  }
};
