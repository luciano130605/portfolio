import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useSite } from "./site-provider";
import { DarkIcon, LightIcon, Menu, X } from "../icons/icons";

export function MobileBar({ open, setOpen, activeId }: { open: boolean; setOpen: (o: boolean) => void; activeId: string }) {
  const { t, lang, theme, toggleLang, toggleTheme } = useSite();
  const btn = "grid size-10 place-items-center rounded-[10px] text-muted hover:bg-elevated hover:text-fg";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-line bg-bg/85 px-4 backdrop-blur-md lg:hidden">
        <a href="#intro" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-[10px] border border-line2 bg-elevated font-mono text-[11px]">
            {profile.monogram}
          </span>
          <span className="text-sm font-medium">{profile.name}</span>
        </a>
        <div className="flex items-center gap-1">
          <button type="button" onClick={toggleLang} className={cn(btn, "font-mono text-xs")} aria-label={lang === "es" ? t.cta.langEn : t.cta.langEs}>
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button type="button" onClick={toggleTheme} className={btn} aria-label={theme === "dark" ? t.cta.themeLight : t.cta.themeDark}>
            {theme === "dark" ? <DarkIcon className="size-4" /> : <LightIcon className="size-4" />}
          </button>
          <button type="button" onClick={() => setOpen(!open)} className={btn} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <div
        className={cn("fixed inset-0 z-30 flex flex-col bg-bg px-6 pt-24 pb-10 transition-opacity duration-200 lg:hidden", open ? "opacity-100" : "pointer-events-none invisible opacity-0")}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={cn("flex items-baseline gap-4 border-b border-line py-4 text-4xl font-light tracking-tight", activeId === item.id ? "text-fg" : "text-muted")}
            >
              <span className="font-mono text-xs tracking-widest text-subtle">{item.n}</span>
              {t.nav[item.id]}
            </a>
          ))}
        </nav>
        <p className="mt-auto font-mono text-xs text-subtle">{t.locationLine}</p>
      </div>
    </>
  );
}
