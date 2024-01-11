export enum TypeFlag {
  primitive = 1 << 30,
  operator = 1 << 29,
}

export enum Type {
  //
  undefined = TypeFlag.primitive | 0,
  null = TypeFlag.primitive | 1,
  number = TypeFlag.primitive | 2,
  boolean = TypeFlag.primitive | 3,
  string = TypeFlag.primitive | 4,
  enum = TypeFlag.primitive | 5,

  //
  array = 5,
  object = 6,

  //

  union = TypeFlag.operator | 0,
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

export interface StringSchema extends ISchema {
  type: Type.string;
}

// literal first
export interface EnumSchema extends ISchema {
  type: Type.enum;
  members: Schema[];
}

export interface NumberSchema extends ISchema {
  type: Type.number;
}

export interface ArraySchema extends ISchema {
  type: Type.array;
  elementType: Schema;
}

export interface ObjectSchema extends ISchema {
  type: Type.object;
  members: Record<string, Schema>;
}

export interface UnionSchema extends ISchema {
  type: Type.union;
  members: Schema[];
}

export type Schema =
  | NullSchema
  | UndefinedSchema
  | BooleanSchema
  | StringSchema
  | NumberSchema
  | ArraySchema
  | ObjectSchema
  | UnionSchema;
// | EnumSchema;
