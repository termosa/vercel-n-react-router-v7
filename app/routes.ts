import {
    type RouteConfig,
    route,
    index,
  } from "@react-router/dev/routes";
  
  export default [
    // parent route
    route("dashboard", "routes/dashboard.tsx", [
      // child routes
      index("routes/home.tsx"),
    //   route("settings", "routes/settings.tsx"),
    ]),
  ] satisfies RouteConfig;