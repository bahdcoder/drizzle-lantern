import { Table, getTableName } from "drizzle-orm";
import {
  sentenceCase,
  kebabCase,
} from "./helpers/change_case";
import Path from "path";
import Fs from "fs";
import { DrizzleDatabase } from "./types/database";

import { ResourceConfig, AnyResourceConfig } from "./types";
import { LanternAsset, LanternRoute } from "./types/http";
import { LanternRouteBuilder } from "./routes/route_builder";

export class Lantern<TDatabase extends DrizzleDatabase> {
  private resources: Record<
    string,
    AnyResourceConfig<TDatabase>
  > = {};
  private routes: LanternRoute<TDatabase, any>[] = [];
  private assets: LanternAsset[] = [];
  private manifest: Record<string, any> = {};

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
    this.loadAssetsManifest();

    this.routes.push(
      ...new LanternRouteBuilder({
        resources: this.resources,
        manifest: this.manifest,
      }).routes()
    );

    return this;
  }

  loadAssetsManifest() {
    const rootAssetsPath = Path.resolve(
      __dirname,
      "..",
      "assets"
    );
    const manifest = Path.resolve(
      rootAssetsPath,
      ".vite",
      "manifest.json"
    );

    try {
      const manifestContent = JSON.parse(
        Fs.readFileSync(manifest, "utf-8").toString()
      );

      this.manifest = manifestContent;

      const mainManifest = manifestContent["src/main.tsx"];

      const mainJsAsset = Path.resolve(
        rootAssetsPath,
        mainManifest["file"]
      );

      this.assets.push({
        path: mainManifest["file"],
        fullPath: mainJsAsset,
        type: "js",
      });

      this.assets.push({
        fullPath: Path.resolve(
          rootAssetsPath,
          mainManifest["css"][0]
        ),
        path: mainManifest["css"][0],
        type: "css",
      });
    } catch (error) {
      console.error(
        "Could not load frontend assets manifest. Did you correctly build the frontend admin panel?",
        { error }
      );
    }
  }

  getRoutes() {
    return this.routes;
  }

  getAssets() {
    return this.assets;
  }
}

export function lantern<
  TDatabase extends DrizzleDatabase,
>() {
  return new Lantern<TDatabase>();
}
