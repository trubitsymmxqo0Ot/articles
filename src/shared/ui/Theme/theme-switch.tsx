import clsx from "clsx";
import type { ThemeList } from "./types";
import { Button } from "../button/button";
import { useTheme } from "./theme-provider";
import { themes } from "./model/theme-list";

interface ThemeSwitchProps {
  className?: string;
  collapsed?: boolean;
}

export const ThemeSwitch = ({ className, collapsed = false }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme();

  const onChangeTheme = (title: ThemeList) => {
    if (title === theme) return;
    toggleTheme(title);
  };

  const globalClasses = {
    bg: "bg-bg top-1/2 -translate-1/2",
    icon: "cursor-pointer relative",
  };
  return (
    <div
      className={clsx(
        "flex bg-bg-muted items-center justify-center relative z-10 py-theme-padding",
        collapsed ? 'gap-4' : 'gap-7',
        className,
      )}
    >
      {themes.map((item) => (
        <Button key={item.id} variant="primary" className="relative">
          {item.title === theme && (
            <div
              className={clsx(
                "absolute top-0 left-1/2 bg-bg w-10 h-10 overflow-hidden rounded-full",
                globalClasses.bg,
              )}
            />
          )}
          <item.icon
            key={item.id}
            className={clsx(globalClasses.icon)}
            onClick={() => onChangeTheme(item.title)}
          />
        </Button>
      ))}
    </div>
  );
};
