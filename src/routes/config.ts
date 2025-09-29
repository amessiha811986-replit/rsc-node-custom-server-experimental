import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";
import type { BioLoader } from "../vite-env.d";

export function routes(): RSCRouteConfig {
  return [
    {
      id: "root",
      path: "",
      lazy: () => import("../layouts/root/layout"),
      children: [
        {
          id: "home",
          index: true,
          lazy: () => import("./home/route"),
        },
        {
          id: "about",
          path: "about",
          lazy: () => import("./about/route"),
        },
        {
          id: "bio",
          path: "bio",
          loader: (({ context }) => {
            return {
              data: context.VALUE_FROM_EXPRESS
            }
          }) as BioLoader,
          lazy: () => import("./bio/route")
        }
      ]
    }
  ] satisfies RSCRouteConfig;
}
