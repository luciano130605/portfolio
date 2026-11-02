import { useSite } from "./site-provider";

export function Education() {
  const { t } = useSite();
  return (
    <section id="educacion" className="border-t border-line py-16 sm:py-24">
      <p className="eyebrow">03 — {t.sections.educacion}</p>
      <h2 className="h2 mt-3">{t.sections.educacion}</h2>

      <ol className="mt-10 grid gap-2 sm:mt-14">
        {t.education.map((item, i) => (
          <li key={item.title} className="card grid items-center gap-3 rounded-2xl px-4 py-4 sm:grid-cols-[auto_1fr_auto] sm:gap-5 sm:px-5">
            <span className="grid size-8 place-items-center rounded-full border border-line2 font-mono text-[11px] text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="text-base font-medium leading-snug sm:text-[17px]">{item.title}</p>
              <p className="mt-0.5 text-sm text-muted">{item.school}</p>
            </div>
            <span className="tag w-fit">{item.dates}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
