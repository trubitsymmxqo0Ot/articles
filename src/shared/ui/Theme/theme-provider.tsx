import { useEffect, useState, type ReactNode } from "react";
import type { ThemeList } from "./types";

const DEFAULT_THEME = 'light';
const DEFAULT_LC_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if(!ctx) throw new Error('theme context must been used with light or dark');
    return ctx;
}

export function ThemeProvder({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState<ThemeList>(() => {
        const LC = localStorage.getItem(DEFAULT_LC_KEY) as ThemeList;
        return LC || DEFAULT_THEME
    })

    useEffect(() => {
        document.documentElement.classList.add(theme);
    }, [])

    const toggleTheme = (userTheme: ThemeList) => {
        const LC = localStorage.getItem(DEFAULT_LC_KEY);
        if(LC === userTheme) return;

        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(userTheme);
        localStorage.setItem(DEFAULT_LC_KEY, userTheme);
        setTheme(userTheme);
    }

    const value = {
        theme,
        toggleTheme
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

import { createContext, useContext } from "react";
import type { ThemeContextValue } from "./types";
