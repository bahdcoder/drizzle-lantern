import {
  InferSelectModel,
  InferInsertModel,
  Table,
} from "drizzle-orm";
import { DrizzleDatabase } from "./database";
import { Fields } from "../fields/base_field";
import { LanternCtx } from "./http";

export interface ResourceConfig<
  TDatabase extends DrizzleDatabase,
  TTable extends Table,
> {
  label?: string;
  slug?: string;
  fields: Fields<TTable>;
  beforeCreate?: (
    ctx: LanternCtx<TDatabase, TTable>
  ) => Promise<void> | void;
  beforeUpdate?: (
    ctx: LanternCtx<TDatabase, TTable>
  ) => Promise<void> | void;
}

export type AnyResourceConfig<
  TDatabase extends DrizzleDatabase,
> = ResourceConfig<TDatabase, any>;
