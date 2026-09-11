import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy, type Lang, type Theme } from "@/lib/data";

type SiteContextValue = {
  lang: Lang;
  theme: Theme;
  t: Copy;
  setLang: (lang: Lang) => void;
  setTheme: (theme: Theme) => void;
  toggleLang: () => void;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

const LANG_KEY = "ldp-lang";
const THEME_KEY = "ldp-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

function applyLang(lang: Lang) {
  document.documentElement.lang = lang === "es" ? "es" : "en";
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const storedLang = window.localStorage.getItem(LANG_KEY);
    const storedTheme = window.localStorage.getItem(THEME_KEY);
    if (storedLang === "es" || storedLang === "en") {
      setLangState(storedLang);
      applyLang(storedLang);
    }
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeState(storedTheme);
      applyTheme(storedTheme);
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    applyLang(next);
    window.localStorage.setItem(LANG_KEY, next);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    window.localStorage.setItem(THEME_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "es" ? "en" : "es");
  }, [lang, setLang]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = useMemo<SiteContextValue>(
    () => ({
      lang,
      theme,
      t: copy[lang],
      setLang,
      setTheme,
      toggleLang,
      toggleTheme,
    }),
    [lang, theme, setLang, setTheme, toggleLang, toggleTheme],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
