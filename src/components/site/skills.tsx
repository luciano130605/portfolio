import type { CSSProperties } from "react";
import { useSite } from "./site-provider";

const accents = ["var(--blue)", "var(--orange)", "var(--yellow)", "var(--purple)", "var(--green)"];

export function Skills() {
  const { t } = useSite();
  return (
    <section id="habilidades" className="border-t border-line py-16 sm:py-24">
      <p className="eyebrow">05 — {t.sections.habilidades}</p>
      <h2 className="h2 mt-3">{t.sections.habilidades}</h2>

      <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {t.skillGroups.map((group, i) => (
          <div key={group.label} style={{ "--c": accents[i % accents.length] } as CSSProperties} className="card min-w-0 p-5">
            <p className="flex items-center gap-3 font-mono text-[12.5px] text-muted">
              <i className="dot" />
              {group.label}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="tag text-fg transition-colors hover:border-muted">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
