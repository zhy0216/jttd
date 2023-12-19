import {Schema} from "./types"

export const validate = <T, >(schema: Schema, obj: any): obj is T => {
  return true
}