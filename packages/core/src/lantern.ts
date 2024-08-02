import {
  Table,
  InferInsertModel,
  getTableName,
} from "drizzle-orm";
import { sentenceCase, kebabCase } from "change-case";
import { DrizzleDatabase } from "./types/database";

import { ResourceConfig, AnyResourceConfig } from "./types";
import { LanternRoute } from "./types/http";
import { LanternRouteBuilder } from "./routes/route_builder";

export class Lantern<TDatabase extends DrizzleDatabase> {
  private resources: Record<
    string,
    AnyResourceConfig<TDatabase>
  > = {};
  private routes: LanternRoute<TDatabase, any>[] = [];

  resource<TTable extends Table>(
    table: TTable,
    resource: ResourceConfig<TDatabase, TTable>
  ) {
    const tableName = getTableName(table);

    resource.label =
      resource.label ?? sentenceCase(tableName);

    resource.slug = resource.slug ?? kebabCase(tableName);

    this.resources[getTableName(table)] = resource;

    return this;
  }

  generate() {
    this.routes.push(
      ...new LanternRouteBuilder(this.resources).routes()
    );

    return this;
  }
}

export function lantern<
  TDatabase extends DrizzleDatabase,
>() {
  return new Lantern<TDatabase>();
}
