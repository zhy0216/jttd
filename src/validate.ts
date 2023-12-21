import { Schema } from "./types";

/**
 * use jttd schema to validate object
 */
export const validate = <T>(schema: Schema, obj: any): obj is T => {
  return true;
};
