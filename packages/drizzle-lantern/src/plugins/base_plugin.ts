export type AssetDefinition = {
  path: string;
  contentType?: string;
};

export type BasePluginConfig = {
  assets: (AssetDefinition | string)[];
};

export class BasePlugin {
  private config: BasePluginConfig = {
    assets: [],
  };

  asset(asset: string | AssetDefinition) {
    this.config.assets.push(asset);

    return this;
  }

  style(path: string) {
    this.config.assets.push({
      path,
      contentType: "text/css",
    });

    return this;
  }

  script(path: string) {
    this.config.assets.push({
      path,
      contentType: "text/javascript",
    });

    return this;
  }
}
