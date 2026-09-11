import { useSite } from "./site-provider";

export function Education() {
  const { t } = useSite();

  return (
    <section
      id="educacion"
      className="border-t border-line py-16 sm:py-20 lg:py-28"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle sm:text-xs">
        03 — {t.sections.educacion}
      </p>

      <h2 className="mt-3 font-['Sora'] text-3xl font-medium italic tracking-tight text-fg sm:text-4xl lg:text-5xl">
        {t.sections.educacion}
      </h2>

      <ol className="mt-8 sm:mt-12">
        {t.education.map((item, i) => (
          <li
            key={item.title}
            className="grid gap-4 border-t border-line py-6 sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-6 sm:py-8 lg:grid-cols-[7rem_1fr_auto] lg:gap-8"
          >
            <span className="font-mono text-[11px] tabular-nums text-subtle sm:text-xs">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <p className="text-base font-medium leading-snug text-fg sm:text-lg">
                {item.title}
              </p>

              <p className="mt-1 text-sm leading-relaxed text-muted">
                {item.school}
              </p>
            </div>

            <p className="text-xs text-subtle sm:text-right sm:text-sm">
              {item.dates}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}