export enum TypeFlag {
  primitive = 1 << 30,
}

export enum Type {
  undefined = TypeFlag.primitive | 0,
  null = TypeFlag.primitive | 1,
  number = TypeFlag.primitive | 2,
}

export interface Schema {
  $name?: string; // can be used for refer
  $refer?: string;
  type: Type;
}

interface NullSchema extends Schema {
  type: Type.null;
}

interface UndefinedSchema extends Schema {
  type: Type.undefined;
}

interface NumberSchema extends Schema {
  type: Type.number;
}
