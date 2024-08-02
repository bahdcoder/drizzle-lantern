import { Table } from "drizzle-orm";

export type BaseFieldConfig<T> = {
  label?: string;
  visible?: boolean;
  editable?: boolean;
  sortable?: boolean;
  default?: T | (() => T);
};

export type Fields<T extends Table> = {
  [K in keyof T["_"]["columns"]]?: BaseField<any>;
};

export class BaseField<T> {
  protected config: BaseFieldConfig<T> = {};

  label(label: string) {
    this.config.label = label;
    return this;
  }

  hidden() {
    this.config.visible = false;
    return this;
  }

  readOnly() {
    this.config.editable = false;
    return this;
  }

  sortable() {
    this.config.sortable = true;
    return this;
  }

  default(value: () => T): this {
    this.config.default = value;

    return this;
  }
}
