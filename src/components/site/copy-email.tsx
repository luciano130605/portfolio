import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { profile } from "@/lib/data";

import { cn } from "@/lib/utils";

import { useSite } from "./site-provider";

import { Copy, CopyCheck } from "../icons/icons";

export function CopyEmail({ className }: { className?: string }) {
  const { t } = useSite();
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const el = document.createElement("textarea");

      el.value = profile.email;
      el.style.position = "fixed";
      el.style.opacity = "0";
      el.style.pointerEvents = "none";

      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }

    setCopied(true);
    toast.success(t.cta.copied);

    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Button
      type="button"
      variant="outline"
      aria-label={t.cta.copy}
      onClick={onCopy}
      className={cn(
        // Mobile: completo
        "group h-10 w-auto justify-start overflow-hidden pl-4 pr-3.5",

        // Desktop: compacto
        "sm:w-10 sm:p-0",
        "sm:justify-start",
        "sm:transition-[width] sm:duration-300 sm:ease-out",
        "sm:hover:w-[150px]",

        className,
      )}
    >
      <span className="flex size-5 shrink-0 items-center justify-center sm:size-10">
        {copied ? (
          <CopyCheck className="size-4" />
        ) : (
          <Copy className="size-4" />
        )}
      </span>

      <span
        className="
          ml-2 whitespace-nowrap text-sm
          transition-all duration-300
          sm:ml-0
          sm:-translate-x-2
          sm:opacity-0
          sm:group-hover:translate-x-0
          sm:group-hover:opacity-100
        "
      >
        {copied ? t.cta.copied : t.cta.copy}
      </span>
    </Button>
  );
}
