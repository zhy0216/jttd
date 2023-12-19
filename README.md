# jttd
JSON TypeScript Type Definition

The idea is to represent typescript's type information in json format. With this json:
* tsc can do runtime type check
* dependency injection with type
* ORM
* api client generation


## TODO:
- [] primitive type (0.1)
  - [] null | undefined
  - [] number | bigint
  - [] boolean
  - [] string | symbol
  - [] enum
  - [] literal
- [] objects
    - [] date?
    - [] array (0.1)
    - [] object (0.1)
    - [] class?
- [] type operator
    - [] generics (no?)
    - [] keyof
    - [] typeof (no)
    - [] index access
    - [] condition type
    - [] mapped type
    - [] template literal
    - [] infer (no?)

## Acknowledge
* https://jsontypedef.com/
* https://github.com/deepkit/deepkit-framework