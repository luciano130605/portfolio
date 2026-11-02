import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { useSite } from "./site-provider";
import { Code, GH, Internet } from "../icons/icons";

const accents = ["var(--blue)", "var(--orange)", "var(--yellow)", "var(--purple)", "var(--green)"];
const statusIcons = { "En línea": Internet, "En desarrollo": Code, Live: Internet, "In development": Code } as const;
const statusLabels = { "En línea": "Sitio web", "En desarrollo": "En desarrollo", Live: "Website", "In development": "In development" } as const;

export function Projects() {
  const { t } = useSite();

  return (
    <section id="proyectos" className="border-t border-line py-16 sm:py-24">
      <p className="eyebrow">02 — {t.sections.proyectos}</p>
      <h2 className="h2 mt-3 max-w-2xl">{t.sections.proyectosNote}</h2>

      <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-2">
        {t.projects.map((project, i) => {
          const StatusIcon = statusIcons[project.status];
          return (
            <article
              key={project.title}
              style={{ "--c": accents[i % accents.length] } as CSSProperties}
              className="card group flex flex-col overflow-hidden transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-line2"
            >
              {project.image && (
                <div className="aspect-video w-full overflow-hidden border-b border-line bg-[radial-gradient(90%_90%_at_0%_0%,color-mix(in_srgb,var(--c)_18%,transparent),transparent_65%)]">
                  <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-3 font-mono text-[12.5px] text-muted">
                    <i className="dot" />
                    {project.kicker}
                  </p>
                  {StatusIcon && (
                    <span className="text-subtle" title={statusLabels[project.status]} aria-label={statusLabels[project.status]}>
                      <StatusIcon className="size-4" />
                    </span>
                  )}
                </div>

                <h3 className="mt-4 break-words text-3xl font-light tracking-[-0.03em] sm:text-4xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-[15px]">{project.desc}</p>

                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed">
                  {project.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-[var(--c)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {(project.live || project.repo) && (
                  <div className="mt-auto flex flex-wrap gap-2.5 pt-7">
                    {project.live && (
                      <Button asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Internet className="size-4" />
                          {t.cta.live}
                        </a>
                      </Button>
                    )}
                    {project.repo && (
                      <Button asChild variant="outline">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <GH className="size-4" />
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
