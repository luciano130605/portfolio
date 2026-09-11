import { useSite } from "./site-provider";

export function Skills() {
  const { t } = useSite();

  return (
    <section
      id="habilidades"
      className="border-t border-line py-16 sm:py-20 lg:py-28"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle sm:text-xs">
        05 — {t.sections.habilidades}
      </p>

      <h2 className="mt-3 font-display text-3xl italic tracking-tight text-fg sm:text-4xl lg:text-5xl">
        {t.sections.habilidades}
      </h2>

      <div className="mt-8 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {t.skillGroups.map((group) => (
          <div
            key={group.label}
            className="min-w-0 border-t border-line pt-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle sm:text-xs">
              {group.label}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full px-3 py-1.5 text-xs text-fg shadow-[var(--shadow-border)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-border)] sm:px-3.5 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}