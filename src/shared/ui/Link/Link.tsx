import type { ReactNode } from "react";
import {
  Link as TanstackLink,
  type LinkComponentProps,
} from "@tanstack/react-router";
import clsx from "clsx";

const VARIANTS_SCHEMA = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  GLOBAL: "global",
} as const;

interface LinkProps extends LinkComponentProps {
  children: ReactNode;
  to: LinkComponentProps["to"];
  schema?: (typeof VARIANTS_SCHEMA)[keyof typeof VARIANTS_SCHEMA];
  globalStyles?: boolean;
  className?: string;
}

export const Link = ({
  children,
  className,
  to,
  schema = "primary",
  globalStyles = true,
  ...props
}: LinkProps) => {
  const variants = {
    primary: "bg-subtle",
    secondary: "border border-subtle",
    global: "rounded-sm hover:text-fg-muted transition-colors",
  };

  return (
    <TanstackLink
      to={to}
      className={clsx(
        globalStyles && variants.global,
        variants[schema],
        className,
      )}
      {...props}
    >
      {children}
    </TanstackLink>
  );
};
