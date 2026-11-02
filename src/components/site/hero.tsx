import type { PointerEvent } from "react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { CopyEmail } from "./copy-email";
import { useSite } from "./site-provider";
import { GH, Linkedin, Sms } from "../icons/icons";

export function Hero() {
  const { t } = useSite();
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="intro" onPointerMove={onMove} className="spot flex flex-col pt-10 pb-16 sm:pb-20 lg:pt-28 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 h-[420px] w-[560px] max-w-full opacity-70 [background:radial-gradient(60%_60%_at_70%_30%,var(--g2),transparent_70%),radial-gradient(50%_50%_at_30%_70%,var(--g1),transparent_70%)] blur-2xl"
      />

      <p className="reveal relative flex items-center gap-3 font-mono text-[12.5px] text-muted">
        <i className="dot" style={{ "--c": "var(--green)" } as React.CSSProperties} />
        {t.locationLine}
      </p>

      <h1 className="reveal reveal-d1 relative mt-7 text-[clamp(3.4rem,13vw,9rem)] font-light leading-[0.9] tracking-[-0.05em]">
        <span className="block">{profile.shortName}</span>
        <span className="block text-muted">{profile.lastName}</span>
      </h1>

      <p className="reveal reveal-d2 relative mt-8 w-fit rounded-full border border-line2 bg-surface px-3.5 py-1.5 font-mono text-[12.5px] text-muted">
        {t.role}
      </p>

      <p className="reveal reveal-d3 relative mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        <span className="text-fg">{t.introLead}</span> {t.intro}
      </p>

      <div className="reveal reveal-d4 relative mt-9 flex flex-wrap items-center gap-2.5">
        <Button asChild>
          <a href={`mailto:${profile.email}`}>
            <Sms className="size-4" />
            {t.cta.write}
          </a>
        </Button>
        <CopyEmail />
        <Button asChild variant="outline" size="icon">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label={t.cta.github}>
            <GH className="size-[18px]" />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label={t.cta.linkedin}>
            <Linkedin className="size-[18px]" />
          </a>
        </Button>
      </div>
    </section>
  );
}
