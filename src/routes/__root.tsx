import { Providers } from "app/providers";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const RootLayout = () => {
  return (
    <Providers>
      <Outlet/>
    </Providers>
  );
};

export const Route = createRootRoute({ component: RootLayout });
