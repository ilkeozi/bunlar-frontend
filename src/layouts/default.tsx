import { Navbar } from "../components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        {children}
      </main>
      <footer className="flex w-full flex-col py-8">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-4 md:order-1 md:mt-0">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <div className="flex items-center">
                <svg fill="none" height="34" viewBox="0 0 32 32" width="34">
                  <path
                    clipRule="evenodd"
                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
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
  );
}
