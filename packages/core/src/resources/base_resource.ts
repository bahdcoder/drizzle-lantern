import {
  InferInsertModel,
  Relations,
  Table,
} from "drizzle-orm";
import {
  Field,
  InferModel,
  SerializedBaseField,
} from "../fields/base_field";
import { type LanternRequestContext } from "../types";

export type ResourceConfig<TDatabase, T extends Table> = {
  name?: string;
  table: T;
  relations?: Relations;
  fields?: Field<any, any>[];
  beforeCreate?: (
    ctx: LanternRequestContext<
      TDatabase,
      Partial<InferInsertModel<T>>
    >
  ) => void;
  // beforeCreate?: (
  //   ctx: LanternRequestContext<
  //     TDatabase,
  //     Partial<InferModel<T>>
  //   >
  // ) => void | Promise<void>;
  // afterCreate?: (
  //   ctx: LanternRequestContext<
  //     TDatabase,
  //     Partial<InferModel<T>>
  //   >
  // ) => void | Promise<void>;
  group?: string;
};

export type SerializedResource<T extends Table> = {
  name: string;
  relations?: Relations;
  fields: SerializedBaseField<any>[];
  group?: string;
};

export class Resource<
  TDatabase,
  TTable extends Table = Table,
> {
  private config: ResourceConfig<TDatabase, TTable> =
    {} as any;

  constructor(table: TTable) {
    this.config.table = table;
  }

  name(name: string) {
    this.config.name = name;
    return this;
  }

  relations(relations: Relations) {
    this.config.relations = relations;

    return this;
  }

  fields(fields: Field<any, any>[]) {
    this.config.fields = fields;

    return this;
  }

  beforeCreate(
    handler: ResourceConfig<
      TDatabase,
      TTable
    >["beforeCreate"]
  ) {}

  // beforeCreate(
  //   handler: Resource<
  //     TDatabase,
  //     TTable
  //   >["config"]["beforeCreate"]
  // ) {
  //   this.config.beforeCreate = handler;

  //   return this;
  // }

  group(groupName: string) {
    this.config.group = groupName;

    return this;
  }

  serialize(): SerializedResource<TTable> {
    if (
      !this.config.name ||
      !this.config.table ||
      !this.config.fields
    ) {
      throw new Error("Resource is not fully configured");
    }

    return {
      name: this.config.name,
      relations: this.config.relations,
      fields: this.config.fields.map((field) =>
        field.serialize()
      ),
      group: this.config.group,
    };
  }
}

// export function resource<TDatabase, TTable extends Table>(
//   table: TTable
// ) {
//   return new Resource<TDatabase, TTable>(table);
// }

export function resource<TTable extends Table>(
  table: TTable
) {
  return <TDatabase>(
    db: TDatabase
  ): Resource<TDatabase, TTable> => {
    return new Resource<TDatabase, TTable>(table);
  };
}
