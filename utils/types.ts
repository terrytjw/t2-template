// dark/light mode theme
export type Theme = "lofi" | "business";
export type ThemeContextType = { theme: Theme; toggleTheme: () => void };
