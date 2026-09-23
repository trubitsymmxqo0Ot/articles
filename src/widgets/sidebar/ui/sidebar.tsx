import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button/button";
import { LanguageSwitcher } from "shared/ui/language-switcher/language-switcher";
import { ThemeSwitch } from "shared/ui/theme/theme-switch";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const {t} = useTranslation('sidebar');
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
        <div className="flex flex-col gap-4 items-center">
        <LanguageSwitcher/>
        <Button onClick={() => setCollapsed(!collapsed)}>{collapsed ? t('actions.open') : t('actions.close')}</Button>
        </div>
    </nav>
  );
};
