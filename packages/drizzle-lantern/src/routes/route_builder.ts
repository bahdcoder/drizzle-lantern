import { AnyResourceConfig } from "../types";
import { LanternRoute } from "../types/http";
import { AdminRoute } from "./admin_route";
import { CreateResourceRoute } from "./create_resource_route";

type LanternAppCtx = {
  resources: Record<string, AnyResourceConfig<any>>;
  manifest: Record<string, any>;
};

export class LanternRouteBuilder {
  private appCtx: LanternAppCtx = {
    resources: {},
    manifest: {},
  };

  constructor(appCtx: LanternAppCtx) {
    this.appCtx = appCtx;
  }

  routes(): LanternRoute<any, any>[] {
    return [
      this.buildMainAdminRoute(),
      this.buildCreateRoutes(),
      this.buildIndexRoutes(),
    ];
  }

  private buildMainAdminRoute(): LanternRoute<any, any> {
    const adminRoute = new AdminRoute(this.appCtx.manifest);

    return {
      method: "GET",
      path: "/",
      handler: adminRoute.handle.bind(adminRoute),
    };
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

  private buildIndexRoutes(): LanternRoute<any, any> {
    return {
      method: "GET",
      path: `/resources/:resourceSlug`,
      handler: new CreateResourceRoute().handle,
    };
  }

  private buildGetDetailRoutes() {
    return [];
  }
}
