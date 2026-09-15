
import { Button } from "@/components/ui/button";

import { useSite } from "./site-provider";

import { Code, GH, Internet } from "../icons/icons";

export function Projects() {
  const { t } = useSite();

  const statusIcons = {
    "En línea": Internet,
    "En desarrollo": Code,
    Live: Internet,
    "In development": Code,
  } as const;

  const statusLabels = {
    "En línea": "Sitio web",
    "En desarrollo": "En desarrollo",
    Live: "Website",
    "In development": "In development",
  } as const;

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

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-1 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-2">
        {t.projects.map((project) => {
          const StatusIcon = statusIcons[project.status];

          return (
            <article
              key={project.title}
              className="w-[88vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)] sm:w-auto sm:shrink lg:rounded-3xl"
            >
              {project.image && (
                <div className="aspect-video w-full overflow-hidden bg-elevated">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="p-5 text-center sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle sm:text-xs">
                    {project.kicker}
                  </p>

                  {StatusIcon && (
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-muted"
                      title={statusLabels[project.status]}
                      aria-label={statusLabels[project.status]}
                    >
                      <StatusIcon className="size-3.5" />

                    </span>
                  )}
                </div>

                <h3 className="mt-3 break-words font-display text-3xl tracking-tight text-fg sm:text-4xl lg:text-5xl">
                  {project.title}
                </h3>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted sm:mt-5 sm:text-base">
                  {project.desc}
                </p>

                <ul className="mx-auto mt-6 max-w-lg space-y-3 text-left text-sm leading-relaxed text-fg sm:mt-7">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1.5 text-xs text-muted shadow-[var(--shadow-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.live || project.repo) && (
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    {project.live && (
                      <Button asChild className="w-full px-5 sm:w-auto">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Internet className="size-4" size={18} />
                          {t.cta.live}
                        </a>
                      </Button>
                    )}

                    {project.repo && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full px-4 sm:w-auto"
                      >
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GH className="size-4" size={18} />
                          {t.cta.repo}
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
