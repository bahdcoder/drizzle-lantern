import type { InferInsertModel, Table } from "drizzle-orm";
import { DrizzleDatabase } from "./database";

export type _HTTPMethods =
  | "DELETE"
  | "GET"
  | "HEAD"
  | "PATCH"
  | "POST"
  | "PUT"
  | "OPTIONS"
  | "PROPFIND"
  | "PROPPATCH"
  | "MKCOL"
  | "COPY"
  | "MOVE"
  | "LOCK"
  | "UNLOCK"
  | "TRACE"
  | "SEARCH"
  | "REPORT"
  | "MKCALENDAR";
export type HTTPMethods =
  | Uppercase<_HTTPMethods>
  | Lowercase<_HTTPMethods>;

export interface LanternCtx<
  TDatabase extends DrizzleDatabase,
  TTable extends Table,
> {
  database: TDatabase;
  table: TTable;
  payload: InferInsertModel<TTable>;
}

export type HandlerResponse = Response | Promise<Response>;

export type LanternRoute<
  TDatabase extends DrizzleDatabase,
  TTable extends Table,
> = {
  method: HTTPMethods;
  path: string;
  handler: (ctx: LanternCtx<TDatabase, TTable>) => void;
};
