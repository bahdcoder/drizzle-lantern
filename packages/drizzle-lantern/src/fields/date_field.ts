import { BaseField } from "./base_field";

export class DateField extends BaseField<Date> {
  format(format: string): this {
    (this.config as any).format = format;
    return this;
  }
}

export function date() {
  return new DateField();
}
