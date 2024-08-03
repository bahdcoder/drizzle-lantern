import { resolve } from "path";
import { LanternCtx } from "../types";

export class AdminRoute {
  constructor(private manifest: Record<string, any>) {}

  async handle(ctx: LanternCtx<any, any>) {
    console.log({ manifest: this.manifest });
    return {
      html: /* html */ `
      <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            />
            <title>LANTERN: Vite + React + TS</title>
            <link rel="stylesheet" href="/lantern/static/${this.manifest["src/main.tsx"]["css"][0]}" />
        </head>
        <body>
            <div id="root"></div>
            <script type="module" src="/lantern/static/${this.manifest["src/main.tsx"]["file"]}"></script>
        </body>
        </html>
      `,
    };
  }
}

// define a route that returns the base html for the page
