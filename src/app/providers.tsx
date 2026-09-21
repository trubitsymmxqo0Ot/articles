import { type ReactNode } from "react";
import { ThemeProvder } from "../shared/ui/Theme/theme-provider";
import { Layout } from "./layout";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvder>
      <Layout>{children}</Layout>
    </ThemeProvder>
  );
};
