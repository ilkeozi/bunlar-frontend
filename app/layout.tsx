import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { BunlarLogo } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  /* themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	], */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="flex w-full flex-col py-8">
              <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="mt-4 md:order-1 md:mt-0">
                  <div className="flex items-center justify-center gap-3 md:justify-start">
                    <div className="flex items-center">
                      <BunlarLogo />
                      <span className="text-small font-medium">BUNLAR</span>
                    </div>
                    <div
                      className="shrink-0 bg-divider border-none w-divider h-4"
                      role="separator"
                      data-orientation="vertical"
                      aria-orientation="vertical"
                    ></div>
                    <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium border-default bg-transparent h-7 text-small rounded-full border-none px-0 text-default-500">
                      <span className="w-2 h-2 ml-1 rounded-full bg-success"></span>
                      <span className="flex-1 text-inherit font-normal px-2">
                        All systems operational
                      </span>
                    </div>
                  </div>
                  <p className="text-left text-tiny text-default-400 md:text-start">
                    © 2024 Bunlar.org All rights reserved.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 md:order-2 md:items-end"></div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
