import { useState } from "react";
import { Contact } from "./contact";
import { Courses } from "./courses";
import { Education } from "./education";
import { Hero } from "./hero";
import { MobileBar } from "./mobile-bar";
import { Projects } from "./projects";
import { Rail } from "./rail";
import { Skills } from "./skills";
import { useSite } from "./site-provider";
import { useActiveSection } from "./use-active-section";

export function Portfolio() {
  const { t } = useSite();
  const activeId = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-dvh overflow-x-clip bg-bg text-fg">
      <div className="grain" aria-hidden="true" />
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        {t.cta.skip}
      </a>

      <aside className="fixed inset-y-0 left-0 z-20 hidden w-56 border-r border-line px-6 py-8 lg:flex">
        <Rail activeId={activeId} />
      </aside>

      <MobileBar open={menuOpen} setOpen={setMenuOpen} activeId={activeId} />

      <main className="px-5 pt-20 pb-10 sm:px-8 lg:ml-56 lg:px-16 lg:pt-0 lg:pb-16">
        <div className="mx-auto max-w-4xl">
          <Hero />
          <Projects />
          <Education />
          <Courses />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}
