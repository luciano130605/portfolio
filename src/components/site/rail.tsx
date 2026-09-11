import { Moon, Sun } from "lucide-react";
import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useSite } from "./site-provider";

export function Rail({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate?: () => void;
}) {
  const { t, lang, theme, toggleLang, toggleTheme } = useSite();

  return (
    <div className="flex h-full flex-col">
      <a href="#intro" className="group" onClick={onNavigate}>
     
        <span className="mt-3 block text-sm text-fg">{profile.name}</span>
      </a>

      <nav className="mt-12 flex flex-col gap-1" aria-label="Primary">
        {nav.map((item) => {
          const label = t.nav[item.id];
          const active = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onNavigate}
              className={cn(
                "group flex items-baseline gap-3 py-2 text-sm transition-colors duration-150",
                active ? "text-fg" : "text-subtle hover:text-fg",
              )}
            >
              <span className="font-mono text-xs tabular-nums">{item.n}</span>
              <span className="relative">
                {label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-fg transition-[width] duration-200 ease-[var(--ease-out)]",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </span>
            </a>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-4 pt-10">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full px-3 py-1.5 font-mono text-xs text-muted shadow-[var(--shadow-border)] transition-colors duration-150 hover:text-fg"
            aria-label={lang === "es" ? t.cta.langEn : t.cta.langEs}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex size-9 items-center justify-center rounded-full text-muted shadow-[var(--shadow-border)] transition-colors duration-150 hover:text-fg"
            aria-label={theme === "dark" ? t.cta.themeLight : t.cta.themeDark}
          >
            <span className="relative size-4">
              <Sun
                className={cn(
                  "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                  theme === "light"
                    ? "scale-100 opacity-100 blur-none"
                    : "scale-[0.25] opacity-0 blur-[4px]",
                )}
              />
              <Moon
                className={cn(
                  "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                  theme === "dark"
                    ? "scale-100 opacity-100 blur-none"
                    : "scale-[0.25] opacity-0 blur-[4px]",
                )}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
