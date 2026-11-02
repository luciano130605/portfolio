import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { CopyEmail } from "./copy-email";
import { useSite } from "./site-provider";
import { GH, Linkedin, Sms } from "../icons/icons";

export function Contact() {
  const { t } = useSite();
  return (
    <section id="contacto" className="border-t border-line py-16 sm:py-24">
      <p className="eyebrow">06 — {t.sections.contacto}</p>

      <div className="card glow mt-5 flex min-h-[420px] flex-col justify-between overflow-hidden p-6 sm:p-12">
        <div>
          <h2 className="max-w-4xl text-[clamp(2.6rem,9vw,6.5rem)] font-light leading-[0.95] tracking-[-0.05em]">{t.cta.write}</h2>
          <a href={`mailto:${profile.email}`} className="mt-6 inline-block max-w-full break-all font-mono text-sm text-muted underline decoration-line2 underline-offset-4 transition-colors hover:text-fg sm:text-base">
            {profile.email}
          </a>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-center gap-2.5">
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
          <p className="mt-8 border-t border-line pt-5 font-mono text-[12.5px] text-subtle">{t.languages}</p>
        </div>
      </div>
    </section>
  );
}
