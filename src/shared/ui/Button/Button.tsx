import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const BUTTON_VARIATNS = {
  GHOST: "ghost",
  PRIMARY: "primary",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconOnly?: boolean;
  variant?: (typeof BUTTON_VARIATNS)[keyof typeof BUTTON_VARIATNS];
  startContent?: ReactNode;
  endContent?: ReactNode;
  className?: string;
}

export const Button = ({
  children,
  iconOnly,
  className,
  startContent,
  endContent,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const globalStyles = "flex items-center gap-2";

  const globalVariantsStyles = "transition-colors py-2 px-3";

  const variants = {
    ghost: "",
    primary: clsx(
      "bg-surface text-fg hover:text-fg-muted",
      "active:bg-surfance-hover hover:bg-surfance-hover",
      globalVariantsStyles,
    ),
  }[variant];

  if (iconOnly) {
    return (
      <div>
        <span
          role="button"
          className={clsx(globalStyles, variants, className)}
          {...props}
        >
          {startContent}
          {children}
          {endContent}
        </span>
      </div>
    );
  }

  return (
    <button className={clsx(globalStyles, variants, className)} {...props}>
      {startContent}
      {children}
      {endContent}
    </button>
  );
};
