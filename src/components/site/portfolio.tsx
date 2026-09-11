import { useState } from "react";

import { cn } from "@/lib/utils";

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
  const [railCollapsed, setRailCollapsed] = useState(false);

  return (
    <div className="relative min-h-dvh overflow-x-clip bg-bg text-fg">
      <div className="grain" aria-hidden="true" />

      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        {t.cta.skip}
      </a>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-20 hidden border-r border-line",
          "transition-[width] duration-300 ease-[var(--ease-out)]",
          "lg:flex",
          railCollapsed ? "w-[72px]" : "w-56",
        )}
      >
        <div
          className={cn(
            "relative h-full w-full py-8",
            "transition-[padding] duration-300 ease-[var(--ease-out)]",
            railCollapsed ? "px-3" : "px-6",
          )}
        >
          <Rail
            activeId={activeId}
            collapsed={railCollapsed}
            onToggle={() => setRailCollapsed((prev) => !prev)}
          />
        </div>
      </aside>

      <MobileBar
        open={menuOpen}
        setOpen={setMenuOpen}
        activeId={activeId}
      />

      <main
        className={cn(
          "px-5 pt-20 pb-10",
          "transition-[margin] duration-300 ease-[var(--ease-out)]",
          "sm:px-8",
          "lg:px-16 lg:pt-0 lg:pb-16",
          railCollapsed ? "lg:ml-[72px]" : "lg:ml-56",
        )}
      >
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
