import { Toaster } from "sonner";
import { useSite } from "./site-provider";

export function ThemedToaster() {
  const { theme } = useSite();
  return (
    <Toaster
      theme={theme}
      position="bottom-center"
      toastOptions={{
        className:
          "!font-sans !bg-elevated !text-fg !border-transparent !shadow-[var(--shadow-border)]",
      }}
    />
  );
}
