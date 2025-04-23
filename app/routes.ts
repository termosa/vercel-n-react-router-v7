import {
    type RouteConfig,
    route,
    index,
  } from "@react-router/dev/routes";
  
  export default [
    index("routes/home.tsx"),
    route(":foo", "routes/layout.tsx", [
      // route("bar", "routes/home.tsx"),
      route("*?", "routes/not-found.tsx"),
    ])
  ] satisfies RouteConfig;
  