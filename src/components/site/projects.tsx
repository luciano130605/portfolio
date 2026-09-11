import { Button } from "@/components/ui/button";
import { useSite } from "./site-provider";
import { GH } from "../icons/icons";

export function Projects() {
  const { t } = useSite();
  const p = t.evently;

  return (
    <section
      id="proyectos"
      className="border-t border-line py-16 sm:py-20 lg:py-28"
    >
      <header className="mb-10 sm:mb-12">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle sm:text-xs">
            02 — {t.sections.proyectos}
          </p>

          <h2 className="mt-3 max-w-2xl font-['Sora'] text-3xl font-medium italic tracking-tight text-fg sm:text-4xl lg:text-5xl">
            {t.sections.proyectosNote}
          </h2>
        </div>
      </header>

      <article className="mx-auto w-full max-w-2xl rounded-2xl bg-surface p-5 text-center shadow-[var(--shadow-border)] sm:p-8 lg:rounded-3xl lg:p-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle sm:text-xs">
          {p.kicker}
        </p>

        <h3 className="mt-3 break-words font-display text-3xl tracking-tight text-fg sm:text-4xl lg:text-5xl">
          {p.title}
        </h3>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted sm:mt-5 sm:text-base">
          {p.desc}
        </p>

        <ul className="mx-auto mt-6 max-w-lg space-y-3 text-left text-sm leading-relaxed text-fg sm:mt-7">
          {p.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-8">
          {["React", "Supabase"].map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1.5 text-xs text-muted shadow-[var(--shadow-border)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="w-full px-5 sm:w-auto">
            <a
              href="https://evently-azure-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.cta.live}
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full px-4 sm:w-auto"
          >
            <a
              href="https://github.com/luciano130605/evently"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GH className="size-4" />
              {t.cta.repo}
            </a>
          </Button>
        </div>
      </article>
    </section>
  );
}