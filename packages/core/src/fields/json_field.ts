import { BaseField } from "./base_field";

export class JsonField extends BaseField<object> {
  schema(schema: object): this {
    (this.config as any).schema = schema;
    return this;
  }
}
export function json() {
  return new JsonField();
}
