import { Outlet } from "react-router";
import { Layout as ClientLayout } from "./layout.client";
import "./style.css";

export { ErrorBoundary } from "./layout.client";
export function Layout({ children }: { children: React.ReactNode }) {
  // This is necessary for the bundler to inject the needed CSS assets.
  return <ClientLayout>{children}</ClientLayout>;
}

export default function Component() {
  return <Outlet />;
}
