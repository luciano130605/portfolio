import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useSite } from "./site-provider";
import { DarkIcon, LightIcon, RailClosedIcon, RailOpenIcon } from "../icons/icons";

type RailProps = { activeId: string; onNavigate?: () => void; collapsed: boolean; onToggle: () => void };

export function Rail({ activeId, onNavigate, collapsed, onToggle }: RailProps) {
  const { t, lang, theme, toggleLang, toggleTheme } = useSite();
  const label = collapsed ? "Expandir menú" : "Contraer menú";

  return (
    <div className="flex h-full w-full flex-col">
      <button
        type="button"
        onClick={onToggle}
        aria-label={label}
        title={label}
        className="absolute -right-3.5 top-[30px] z-20 grid size-7 place-items-center rounded-[9px] border border-line2 bg-surface text-muted transition-colors hover:bg-elevated hover:text-fg"
      >
        {collapsed ? <RailClosedIcon className="size-4" /> : <RailOpenIcon className="size-4" />}
      </button>

      <a href="#intro" onClick={onNavigate} className="flex items-center gap-2.5 px-1.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-[10px] border border-line2 bg-elevated font-mono text-[11px] text-fg">
          {profile.monogram}
        </span>
        <span
          className={cn(
            "overflow-hidden whitespace-nowrap text-[15px] font-medium transition-[max-width,opacity] duration-300",
            collapsed ? "max-w-0 opacity-0" : "max-w-44 opacity-100",
          )}
        >
          {profile.name}
        </span>
      </a>

      <nav className="mt-10 flex flex-col gap-0.5" aria-label="Primary">
        {nav.map((item) => {
          const active = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onNavigate}
              title={collapsed ? t.nav[item.id] : undefined}
              className={cn(
                "flex min-h-[41px] items-center rounded-[10px] border px-3 py-2.5 text-[13px] transition-colors duration-200 hover:bg-elevated hover:text-fg",
                collapsed ? "justify-center" : "gap-2.5",
                active ? "border-line2 bg-elevated text-fg" : "border-transparent text-muted",
              )}
            >
              <span
                className={cn(
                  "overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300",
                  collapsed ? "max-w-0 opacity-0" : "max-w-40 flex-1 opacity-100",
                )}
              >
                {t.nav[item.id]}
              </span>
              <span className="font-mono text-[11px] tabular-nums text-subtle">{item.n}</span>
            </a>
          );
        })}
      </nav>

      <div className={cn("mt-auto flex gap-2", collapsed ? "flex-col items-center" : "items-center px-1")}>
        <button
          type="button"
          onClick={toggleLang}
          aria-label={lang === "es" ? t.cta.langEn : t.cta.langEs}
          className="h-9 rounded-[10px] border border-line2 bg-elevated px-3 font-mono text-xs text-muted transition-colors hover:text-fg"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? t.cta.themeLight : t.cta.themeDark}
          className="grid size-9 place-items-center rounded-[10px] border border-line2 bg-elevated text-muted transition-colors hover:text-fg"
        >
          {theme === "dark" ? <DarkIcon className="size-4" /> : <LightIcon className="size-4" />}
        </button>
      </div>
    </div>
  );
}
