import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { CopyEmail } from "./copy-email";
import { useSite } from "./site-provider";
import { GH, Linkedin, Sms } from "../icons/icons";

export function Hero() {
  const { t } = useSite();

  return (
    <section
      id="intro"
      className="flex w-full flex-col overflow-hidden pt-8 pb-16 sm:pb-20 lg:pt-24 lg:pb-28"
    >
      <div className="reveal">
        <div className="mb-7 flex flex-wrap items-center gap-3 sm:mb-8">
          <span className="text-sm text-subtle sm:text-base">
            {t.locationLine}
          </span>
        </div>
      </div>

      <h1 className="reveal reveal-d1 font-['Sora'] text-[clamp(3rem,16vw,8.5rem)] leading-[0.88] tracking-[-0.045em] text-fg">
        <span className="block">{profile.shortName}</span>
        <span className="block">{profile.lastName}</span>
      </h1>

      <p className="reveal reveal-d2 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-xl">
        {t.role}
      </p>

      <p className="reveal reveal-d3 mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-lg">
        <span className="text-fg">{t.introLead}</span>{" "}
        {t.intro}
      </p>

      <div className="reveal reveal-d4 mt-8 flex flex-wrap items-center gap-2.5 sm:mt-10 sm:gap-3">
        <Button
          asChild
          className="min-h-10 pl-4 pr-4 sm:pl-5 sm:pr-4"
        >
          <a href={`mailto:${profile.email}`}>
            <Sms className="size-4" />
            {t.cta.write}
          </a>
        </Button>

        <div className="relative z-20 touch-manipulation">
          <CopyEmail />
        </div>

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

              <span className="hidden whitespace-nowrap pr-3 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block -translate-x-2">
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

              <span className="hidden whitespace-nowrap pr-3 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block -translate-x-2">
                LinkedIn
              </span>
            </a>
          </Button>
        </div>
      </div>

    </section>
  );
}
