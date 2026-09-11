import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

const ids = nav.map((item) => item.id);

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "intro");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const update = () => {
      const marker = 140;
      let current: string = ids[0] ?? "intro";
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= marker) current = el.id;
      }
      const last = elements[elements.length - 1];
      if (
        last &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 24
      ) {
        current = last.id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return activeId;
}
