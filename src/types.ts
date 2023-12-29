export enum TypeFlag {
  primitive = 1 << 30,
}

export enum Type {
  //
  undefined = TypeFlag.primitive | 0,
  null = TypeFlag.primitive | 1,
  number = TypeFlag.primitive | 2,
  boolean = TypeFlag.primitive | 3,

  //
  array = 5,
}

export interface ISchema {
  $name?: string; // can be used for refer
  $refer?: string;
  type: Type;
}

export interface NullSchema extends ISchema {
  type: Type.null;
}

export interface UndefinedSchema extends ISchema {
  type: Type.undefined;
}

export interface BooleanSchema extends ISchema {
  type: Type.boolean;
}

interface NumberSchema extends ISchema {
  type: Type.number;
}

interface ArraySchema extends ISchema {
  type: Type.array;
  elementType: ISchema;
}

export type Schema =
  | NullSchema
  | UndefinedSchema
  | BooleanSchema
  | NumberSchema
  | ArraySchema;
