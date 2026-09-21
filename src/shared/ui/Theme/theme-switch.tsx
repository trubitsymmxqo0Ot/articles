import clsx from "clsx";
import { useTheme } from "./theme-provider";
import { themes } from "./model/theme-list";
import type { ThemeList } from "./types";
import { GAP, HALF_ICON, ICON_SIZE, PADDING } from "./model/consts";
import { Button } from "../Button/Button";

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme();

  const onChangeTheme = (title: ThemeList, id: number) => {
    if (title === theme) return;
    toggleTheme(title);
  };

  const offset = () => {
    const index = themes.findIndex((item) => item.title === theme);
    if (index !== -1) {
      return PADDING + index * (ICON_SIZE + GAP) + HALF_ICON;
    }
    return HALF_ICON;
  };

  const globalClasses = {
    bg: "bg-bg top-1/2 -translate-1/2",
    icon: "cursor-pointer relative",
  };
  return (
    <div
      className={clsx(
        "flex bg-bg-muted py-5 px-4 gap-8 items-center relative z-10",
        className,
      )}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 bg-bg w-10 h-10 overflow-hidden rounded-full",
          globalClasses.bg,
        )}
        style={{
          left: `${offset()}px`,
        }}
      />
      {themes.map((item) => (
        <Button variant="primary">
          <item.icon
            key={item.id}
            className={clsx(globalClasses.icon)}
            onClick={() => onChangeTheme(item.title, item.id)}
          />
        </Button>
      ))}
    </div>
  );
};
