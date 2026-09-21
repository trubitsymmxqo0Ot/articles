export type ThemeList = 'light' | 'dark';

export interface ThemeContextValue {
    theme: ThemeList;
    toggleTheme: (userTheme: ThemeList) => void;
}
