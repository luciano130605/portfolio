import { Button } from "@/components/ui/button";

import { profile } from "@/lib/data";

import { CopyEmail } from "./copy-email";
import { useSite } from "./site-provider";

import { GH, Linkedin, Sms } from "../icons/icons";

export function Contact() {
  const { t } = useSite();

  return (
    <section
      id="contacto"
      className="border-t border-line py-16 sm:py-20 lg:py-28"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle sm:text-xs">
        06 — {t.sections.contacto}
      </p>

      <h2 className="mt-3 max-w-4xl font-['Sora'] text-3xl font-medium italic tracking-tight text-fg sm:text-5xl lg:text-7xl">
        {t.cta.write}
      </h2>

      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block max-w-full break-all text-base text-fg underline decoration-line underline-offset-4 transition-colors hover:text-primary sm:mt-8 sm:text-xl"
      >
        {profile.email}
      </a>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild className="pl-5 pr-4">
          <a href={`mailto:${profile.email}`}>
            <Sms className="size-4" />
            {t.cta.write}
          </a>
        </Button>

        <CopyEmail />

        <div className="flex basis-full items-center gap-2 sm:basis-auto sm:gap-3">
          <Button
            asChild
            variant="ghost"
            className="group relative h-10 w-10 justify-start overflow-hidden p-0 text-fg transition-all duration-300 hover:w-[120px]"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.cta.github}
            >
              <span className="flex size-10 shrink-0 items-center justify-center">
                <GH className="size-5" />
              </span>

              <span className="hidden -translate-x-2 whitespace-nowrap pr-3 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                GitHub
              </span>
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="group relative h-10 w-10 justify-start overflow-hidden p-0 text-fg transition-all duration-300 hover:w-[120px]"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.cta.linkedin}
            >
              <span className="flex size-10 shrink-0 items-center justify-center">
                <Linkedin className="size-5" />
              </span>

              <span className="hidden -translate-x-2 whitespace-nowrap pr-3 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                LinkedIn
              </span>
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-subtle sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
        <p>{t.languages}</p>
      </div>
    </section>
  );
}