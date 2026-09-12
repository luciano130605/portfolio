import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useSite } from "./site-provider";
import { DarkIcon, LightIcon, RailClosedIcon, RailOpenIcon } from "../icons/icons";

type RailProps = {
  activeId: string;
  onNavigate?: () => void;
  collapsed: boolean;
  onToggle: () => void;
};

export function Rail({
  activeId,
  onNavigate,
  collapsed,
  onToggle,
}: RailProps) {
  const { t, lang, theme, toggleLang, toggleTheme } = useSite();

  return (
    <div className="relative flex h-full w-full flex-col">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "absolute top-0 z-30 flex size-8 items-center justify-center rounded-full",
          "text-muted ",
          "transition-all duration-200",
          "hover:text-fg",
          collapsed ? "right-1" : "right-0",
        )}
        aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
        title={collapsed ? "Expandir menú" : "Contraer menú"}
      >
        <span className="flex size-4 items-center justify-center">
          {collapsed ? (
            <RailClosedIcon className="size-4" />
          ) : (
            <RailOpenIcon className="size-4" />
          )}
        </span>
      </button>

      <a
        href="#intro"
        onClick={onNavigate}
        className={cn(
          "block overflow-hidden transition-all duration-300 ease-[var(--ease-out)]",
          collapsed
            ? "pointer-events-none max-w-0 -translate-x-2 opacity-0"
            : "max-w-48 translate-x-0 opacity-100",
        )}
      >
        <span className="mt-3 block whitespace-nowrap text-sm text-fg">
          {profile.name}
        </span>
      </a>

      <nav
        className={cn(
          "flex flex-col gap-1 transition-[margin] duration-300 ease-[var(--ease-out)]",
          collapsed ? "mt-8" : "mt-12",
        )}
        aria-label="Primary"
      >
        {nav.map((item) => {
          const label = t.nav[item.id];
          const active = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onNavigate}
              title={collapsed ? label : undefined}
              className={cn(
                "group flex items-baseline py-2 text-sm",
                "transition-all duration-200 ease-[var(--ease-out)]",
                collapsed ? "justify-center" : "gap-3",
                active ? "text-fg" : "text-subtle hover:text-fg",
              )}
            >
              <span className="shrink-0 font-mono text-xs tabular-nums">
                {item.n}
              </span>

              <span
                className={cn(
                  "relative overflow-hidden whitespace-nowrap",
                  "transition-[max-width,opacity] duration-300 ease-[var(--ease-out)]",
                  collapsed
                    ? "max-w-0 opacity-0"
                    : "max-w-32 opacity-100",
                )}
              >
                {label}

                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-fg",
                    "transition-[width] duration-200 ease-[var(--ease-out)]",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </span>
            </a>
          );
        })}
      </nav>


      <div
        className={cn(
          "mt-auto overflow-hidden transition-all duration-300 ease-[var(--ease-out)]",
          collapsed
            ? "max-h-0 pt-0 opacity-0"
            : "max-h-20 pt-10 opacity-100",
        )}
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full px-3 py-1.5 font-mono text-xs text-muted shadow-[var(--shadow-border)] transition-colors duration-150 hover:text-fg"
            aria-label={
              lang === "es" ? t.cta.langEn : t.cta.langEs
            }
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex size-7 items-center justify-center rounded-full text-muted shadow-[var(--shadow-border)] transition-colors duration-150 hover:text-fg"
            aria-label={
              theme === "dark"
                ? t.cta.themeLight
                : t.cta.themeDark
            }
          >
            <span className="relative size-4">
              <LightIcon
                className={cn(
                  "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                  theme === "light"
                    ? "scale-100 opacity-100 blur-none"
                    : "scale-[0.25] opacity-0 blur-[4px]",
                )}
              />

              <DarkIcon
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
