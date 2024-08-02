import { BaseField } from "./base_field";

export class NumberField extends BaseField<number> {
  min(value: number): this {
    (this.config as any).min = value;
    return this;
  }

  max(value: number): this {
    (this.config as any).max = value;
    return this;
  }
}

export function number() {
  return new NumberField();
}
