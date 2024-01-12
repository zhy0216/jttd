# jttd

JSON TypeScript Type Definition

The idea is to represent typescript's type information in json format. With this json:

- tsc can do runtime type check
- dependency injection with type
- ORM
- api client generation

## spec

see the type.ts

## TODO:

| feature                  | type -> json | validation |
| ------------------------ | ------------ | ---------- |
| **primitive type (0.1)** |              |            |
| null or undefined        | ✅           | ✅         |
| number                   | ✅           | ✅         |
| boolean                  | ✅           | ✅         |
| string                   | ✅           | ✅         |
| enum                     | 🟨           | 🟨         |
| literal                  | ✅           | ✅         |
| **objects**              |              |            |
| date?                    | 🔜           | 🔜         |
| array (0.1)              | ✅           | ✅         |
| tuple (0.1)              | 🔜           | 🔜         |
| object (0.1)             | ✅           | ✅         |
| function                 |              |            |
| interface (0.1)          |              |            |
| class?                   | 🟨           | 🟨         |
| **type operator**        |              |            |
| union (0.1)              | ✅           | ✅         |
| intersection (0.1)       |              |            |
| ?: optional property     |              |            |
| readonly                 |              |            |
| keyof                    |              |            |
| typeof                   |              |            |
| index access             |              |            |
| condition type           |              |            |
| mapped type              |              |            |
| template literal         |              |            |
| generics                 |              |            |
| infer                    |              |            |

[ ] use official custom transformer plugin: https://github.com/microsoft/TypeScript/issues/54276

## Acknowledge

- https://jsontypedef.com/
- https://github.com/deepkit/deepkit-framework
- https://github.com/zackradisic/tyvm
