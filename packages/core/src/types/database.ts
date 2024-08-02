// mysql supported databases
import type { MySql2Database } from "drizzle-orm/mysql2";
import type { MySqlRemoteDatabase } from "drizzle-orm/mysql-proxy";
import type { PlanetScaleDatabase } from "drizzle-orm/planetscale-serverless";
import type { TiDBServerlessDatabase } from "drizzle-orm/tidb-serverless";

// postgresql supported databases

import type { NeonHttpDatabase } from "drizzle-orm/neon-http";
import type { XataHttpDatabase } from "drizzle-orm/xata-http";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { PgliteDatabase } from "drizzle-orm/pglite";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import type { AwsDataApiPgDatabase } from "drizzle-orm/aws-data-api/pg";
import type { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import type { PgRemoteDatabase } from "drizzle-orm/pg-proxy";

// sqlite supported databases
import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import type { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";

export type DrizzleDatabase =
  | MySql2Database
  | MySqlRemoteDatabase
  | PlanetScaleDatabase
  | TiDBServerlessDatabase
  | NeonHttpDatabase
  | XataHttpDatabase
  | NodePgDatabase
  | PgliteDatabase
  | PostgresJsDatabase
  | AwsDataApiPgDatabase
  | VercelPgDatabase
  | PgRemoteDatabase
  | BetterSQLite3Database
  | BunSQLiteDatabase;

export type DrizzleClient<
  TSchema extends Record<string, unknown> = Record<
    string,
    never
  >,
> =
  | MySql2Database<TSchema>
  | MySqlRemoteDatabase<TSchema>
  | PlanetScaleDatabase<TSchema>
  | TiDBServerlessDatabase<TSchema>
  | NeonHttpDatabase<TSchema>
  | XataHttpDatabase<TSchema>
  | NodePgDatabase<TSchema>
  | PgliteDatabase<TSchema>
  | PostgresJsDatabase<TSchema>
  | AwsDataApiPgDatabase<TSchema>
  | VercelPgDatabase<TSchema>
  | PgRemoteDatabase<TSchema>;
