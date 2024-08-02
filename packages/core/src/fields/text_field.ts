import { BaseField } from "./base_field";

export class TextField extends BaseField<string> {
  maxLength(length: number): this {
    (this.config as any).maxLength = length;
    return this;
  }
}

export function text() {
  return new TextField();
}
