import { Moon, Sun, type LucideIcon } from "lucide-react";
import type { ThemeList } from "../types";

interface IThemes {
    id: number;
    title: ThemeList;
    icon: LucideIcon;
}

export const themes: IThemes[] = [
  {
    id: 1,
    title: 'light',
    icon: Sun,
  },
  {
    id: 2,
    title: 'dark',
    icon: Moon,
  },
];
