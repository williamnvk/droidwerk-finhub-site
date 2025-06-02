import { Provider } from "@/components/ui/provider";
import "@fontsource/poppins";
import "../styles/animations.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CookieConsent } from "@/components/cookie-consent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1428BF" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body>
        <Provider>
          <Toaster />
          {children}
          <CookieConsent />
        </Provider>
        <GoogleAnalytics gaId="G-20NRBTFTPV" />
      </body>
    </html>
  );
}
