// TODO: some idea
import { Schema } from "~/types.ts";
import { validate } from "~/validate.ts";

export interface BoxType<T> {
  schema: Schema;
  validate: (obj: any) => obj is T;
}

export const makeBoxType = <T>(schema: Schema): BoxType<T> => {
  return {
    schema,
    validate: (obj: any): obj is T => validate<T>(schema, obj),
  };
};
