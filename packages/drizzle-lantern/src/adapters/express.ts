import type {
  Application,
  RequestHandler,
  Response,
} from "express";
import type { Lantern } from "../lantern";
import fs from "fs";
import { LanternRoute } from "../types";

type ExpressAdapterConfiguration = {
  lantern: Lantern<any>;
  prefix?: `${string}`;
};

function normalizeRoutePath(routePath: string): string {
  // Remove leading and trailing slashes, then add a leading slash
  return "/" + routePath.replace(/^\/+|\/+$/g, "");
}

const serveStaticFile = (
  filePath: string,
  mimeType: string,
  res: Response
) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.status(404).send("File not found");
      } else {
        res.status(500).send("Internal Server Error");
      }
    } else {
      res.setHeader("Content-Type", mimeType);
      res.setHeader("Content-Length", data.length);
      res.setHeader(
        "Cache-Control",
        "public, max-age=31536000"
      ); // Example cache-control header
      res.send(data);
    }
  });
};

const mimeTypeMap: { [key: string]: string } = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  ico: "image/x-icon",
  pdf: "application/pdf",
  // Add other MIME types as needed
};

export function lanternExpressAdapter(
  app: Application,
  options: ExpressAdapterConfiguration
) {
  const PREFIX: `${string}` = options?.prefix ?? "lantern";
  const ASSET_PREFIX: string = `${PREFIX}/static`;

  const routes = options.lantern.getRoutes();
  const assets = options.lantern.getAssets();

  const handler =
    (
      lanternHandler: LanternRoute<any, any>["handler"]
    ): RequestHandler =>
    async (request, response) => {
      try {
        const lanternResponse = await lanternHandler(
          {} as any
        );

        if (lanternResponse.json) {
          return response
            .status(200)
            .json(lanternResponse.json);
        }

        if (lanternResponse.html) {
          response.setHeader("Content-Type", "text/html");

          return response.send(lanternResponse.html);
        }

        return response.status(200).json(["lantern route"]);
      } catch (error) {
        console.error(error);
        response.status(500).json([]);
      }
    };

  // register routes for assets

  for (const asset of assets) {
    const path =
      "/" + ASSET_PREFIX + normalizeRoutePath(asset.path);

    app.get(path, (req, res) => {
      const filePath = asset.fullPath;
      const mimeType =
        mimeTypeMap[asset.type] ||
        "application/octet-stream";

      serveStaticFile(filePath, mimeType, res);
    });
  }

  for (const route of routes) {
    const path =
      "/" + PREFIX + normalizeRoutePath(route.path);

    console.log({
      path,
      method: route.method,
    });

    switch (route.method) {
      case "post":
      case "POST":
        app.post(path, handler(route.handler));
      case "get":
      case "GET":
        app.get(path, handler(route.handler));

        break;

      default:
        break;
    }
  }

  console.log(
    `Successfully defined ${routes.length} routes on express app.`
  );

  // app.use(lanternExpressMiddleware())
}
