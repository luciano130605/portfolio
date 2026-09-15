import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteProvider } from "@/components/site/site-provider";
import { ThemedToaster } from "@/components/site/themed-toaster";
import appCss from "../styles.css?url";

const APP_NAME = "Luciano de la Peña";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Luciano de la Peña — Software Developer" },
      {
        name: "description",
        content: "Software Developer y estudiante de Desarrollo de Software en Buenos Aires, Argentina",
      },
      { name: "author", content: APP_NAME },
      { name: "theme-color", content: "#0c0c0b" },
      { name: "robots", content: "index, follow" },

      { property: "og:type", content: "website" },
      { property: "og:title", content: "Luciano de la Peña — Software Developer" },
      { property: "og:description", content: "Software Developer y estudiante de Desarrollo de Software en Buenos Aires, Argentina" },
      { property: "og:url", content: "https://tudominio.com" },
      { property: "og:image", content: "https://lucianodelapena.com/og.jpg" },
      { property: "og:locale", content: "es_AR" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Luciano de la Peña — Software Developer" },
      { name: "twitter:description", content: "Software Developer y estudiante de Desarrollo de Software en Buenos Aires, Argentina" },
      { name: "twitter:image", content: "https://lucianodelapena.com/og.jpg" },
    ],
      links: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "stylesheet", href: appCss },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&display=swap",
        },
      ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="es" data-theme="dark" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteProvider>
            <Outlet />
            <ThemedToaster />
          </SiteProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
