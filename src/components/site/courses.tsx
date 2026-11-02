import { useSite } from "./site-provider";

export function Courses() {
  const { t } = useSite();
  return (
    <section id="cursos" className="border-t border-line py-16 sm:py-24">
      <p className="eyebrow">04 — {t.sections.cursos}</p>
      <h2 className="h2 mt-3">{t.sections.cursos}</h2>

      <ul className="mt-10 grid gap-2 sm:mt-14">
        {t.courses.map((course) => (
          <li key={course.title}>
            <a
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card group grid items-center gap-3 rounded-2xl px-4 py-4 transition-colors duration-200 hover:border-line2 hover:bg-elevated sm:grid-cols-[1fr_auto_auto] sm:gap-6 sm:px-5"
            >
              <div className="min-w-0">
                <p className="break-words text-base font-medium leading-snug sm:text-[17px]">{course.title}</p>
                <p className="mt-0.5 text-sm text-muted">{course.org}</p>
              </div>
              <span className="tag w-fit">{course.year}</span>
              <span className="hidden items-center gap-1.5 text-sm text-muted transition-colors group-hover:text-fg sm:inline-flex">
                {t.cta.cert}
               
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
