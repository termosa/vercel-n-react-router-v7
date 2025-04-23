import type { Route } from "./+types/not-found";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Not Found" },
  ];
}

export default function NotFound() {
  return <h1>404 Not Found</h1>
}
