export enum TypeFlag {
  primitive = 1 << 30,
}

export enum Type {
  undefined = TypeFlag.primitive | 0,
  null = TypeFlag.primitive | 1,
}

export interface Schema {
  $name?: string; // can be used for refer
  $refer?: string;
  type: Type;
}

interface Null extends Schema {
  type: Type.null;
}

interface Undefined extends Schema {
  type: Type.undefined;
}
