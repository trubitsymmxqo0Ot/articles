import clsx from "clsx";
import { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { ThemeSwitch } from "shared/ui/Theme/theme-switch";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <nav
      className={clsx(
        "h-[calc(100dvh-var(--height-navbar))] bg-bg",
        collapsed ? "w-sidebar-collapsed" : "w-sidebar-active",
        'flex justify-center flex-col py-10 transition-[width] duration-300',
        'overflow-hidden items-center',
        className,
      )}
    >
        <div className="flex-1 w-full">
        <ThemeSwitch collapsed={collapsed}/>
        </div>
        <Button onClick={() => setCollapsed(!collapsed)}>Открыть</Button>
    </nav>
  );
};
