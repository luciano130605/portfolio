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
    <div className="relative min-h-dvh overflow-x-clip text-fg">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-[10px] focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        {t.cta.skip}
      </a>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-20 hidden border-r border-line bg-side lg:block",
          "transition-[width] duration-300 ease-[var(--ease-out)]",
          railCollapsed ? "w-[78px]" : "w-[250px]",
        )}
      >
        <div className="h-full px-3.5 py-6">
          <Rail
            activeId={activeId}
            collapsed={railCollapsed}
            onToggle={() => setRailCollapsed((p) => !p)}
          />
        </div>
      </aside>

      <MobileBar open={menuOpen} setOpen={setMenuOpen} activeId={activeId} />

      <main
        className={cn(
          "px-5 pt-20 pb-10 transition-[margin] duration-300 ease-[var(--ease-out)] sm:px-8",
          "lg:px-14 lg:pt-0 lg:pb-16",
          railCollapsed ? "lg:ml-[78px]" : "lg:ml-[250px]",
        )}
      >
        <div className="mx-auto max-w-[1040px]">
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
