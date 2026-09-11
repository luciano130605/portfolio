import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useSite } from "./site-provider";
import { DarkIcon, LightIcon } from "../icons/icons";

export function MobileBar({
  open,
  setOpen,
  activeId,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeId: string;
}) {
  const { t, lang, theme, toggleLang, toggleTheme } = useSite();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-line bg-bg/85 px-5 backdrop-blur-md lg:hidden">
        <a href="#intro" className="group" >

          <span className="mt-3 block text-sm text-fg">{profile.name}</span>
        </a>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLang}
            className="flex h-11 min-w-11 items-center justify-center rounded-full px-2 font-mono text-xs text-muted"
            aria-label={lang === "es" ? t.cta.langEn : t.cta.langEs}
          >
            {lang === "es" ? "🇺🇸" : "🇦🇷"}

          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex size-11 items-center justify-center rounded-full text-muted"
            aria-label={theme === "dark" ? t.cta.themeLight : t.cta.themeDark}
          >
            {theme === "dark" ? <DarkIcon className="size-4" /> : <LightIcon className="size-4" />}
          </button>

        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-30 flex flex-col bg-bg px-6 pt-24 pb-10 lg:hidden",
          open
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        hidden={!open}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item) => {
            const label = t.nav[item.id];
            const active = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-baseline gap-4 py-3 font-display text-4xl italic tracking-tight",
                  active ? "text-fg" : "text-muted",
                )}
              >
                <span className="font-mono text-xs not-italic tracking-widest text-subtle">
                  {item.n}
                </span>
                {label}
              </a>
            );
          })}
        </nav>
        <p className="mt-auto text-sm text-subtle">{t.locationLine}</p>
      </div>
    </>
  );
}
