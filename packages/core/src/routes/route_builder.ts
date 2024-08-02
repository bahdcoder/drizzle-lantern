import { AnyResourceConfig } from "../types";
import { LanternRoute } from "../types/http";
import { CreateResourceRoute } from "./create_resource_route";

export class LanternRouteBuilder {
  constructor(
    private resources: Record<
      string,
      AnyResourceConfig<any>
    >
  ) {}

  routes(): LanternRoute<any, any>[] {
    return [this.buildCreateRoutes()];
  }

  private buildCreateRoutes(): LanternRoute<any, any> {
    return {
      method: "POST",
      path: `/resources/:resourceSlug`,
      handler: new CreateResourceRoute().handle,
    };
  }

  private buildDeleteRoutes() {
    return [];
  }

  private buildIndexRoutes() {
    return [];
  }

  private buildGetDetailRoutes() {
    return [];
  }
}
