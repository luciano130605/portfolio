import { useSite } from "./site-provider";

export function Courses() {
  const { t } = useSite();

  return (
    <section
      id="cursos"
      className="border-t border-line py-16 sm:py-20 lg:py-28"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle sm:text-xs">
        04 — {t.sections.cursos}
      </p>

      <h2 className="mt-3 font-['Sora'] text-3xl font-medium italic tracking-tight text-fg sm:text-4xl lg:text-5xl">
        {t.sections.cursos}
      </h2>

      <ul className="mt-8 sm:mt-12">
        {t.courses.map((course) => (
          <li key={course.title} className="border-t border-line">
            <a
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 py-6 transition-colors duration-200 hover:bg-fg/[0.03] sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6 sm:px-3 sm:py-7 lg:gap-10"
            >
              <div className="min-w-0">
                <p className="break-words text-base font-medium leading-snug text-fg transition-colors duration-200 group-hover:text-primary sm:text-lg">
                  {course.title}
                </p>

                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {course.org}
                </p>
              </div>

              <span className="font-mono text-[11px] tabular-nums text-subtle sm:text-xs">
                {course.year}
              </span>

              <span className="hidden sm:inline-flex min-h-10 w-fit items-center gap-2 text-sm text-muted transition-colors duration-200 group-hover:text-fg">
                {t.cta.cert}

              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}