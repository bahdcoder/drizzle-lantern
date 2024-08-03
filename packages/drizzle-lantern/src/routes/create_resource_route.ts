import { LanternCtx } from "../types";

export class CreateResourceRoute {
  async handle(ctx: LanternCtx<any, any>) {
    return { json: {} };
  }
}

// define a route that returns the base html for the page
