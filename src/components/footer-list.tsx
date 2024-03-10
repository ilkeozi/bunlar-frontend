import Link from "next/link";

export const FooterList = () => {
  return (
    <div>
      <h3 className="text-small font-semibold text-default-600">Legal</h3>
      <ul className="mt-6 space-y-4">
        <li>
          <Link
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            href="/legal/privacy"
          >
            Privacy
          </Link>
        </li>
        <li>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            role="link"
            href="#"
          >
            Terms of Use
          </a>
        </li>
        <li>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            role="link"
            href="#"
          >
            Career Opportunities
          </a>
        </li>
        <li>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            role="link"
            href="#"
          >
            Media Enquiries
          </a>
        </li>
        <li>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            role="link"
            href="#"
          >
            Collaborations
          </a>
        </li>
      </ul>
    </div>
  );
};
