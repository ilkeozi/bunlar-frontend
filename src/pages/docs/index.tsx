import { title, subtitle } from "../../components/primitives";
import DefaultLayout from "@/layouts/default";

import { Claim } from "@/components/claim";

export default function DocsPage() {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <DefaultLayout>
      <section className="flex flex-col mx-auto max-w-7xl items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block  text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Blog&nbsp;</h1>
          <h1 className={title()}>
            websites regardless of your design experience.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h4>
        </div>
      </section>
      <Claim
        veracity={5}
        text={"The use of AI in programming should be welcomed."}
      />

      <section className="grid grid-cols-2 gap-4 py-8 justify-between ">
        <div className="flex flex-col gap-4">
          <Claim
            veracity={2}
            text={
              "AI represents a threat to the foundational principles of democracy."
            }
          />
          <Claim
            veracity={1}
            text={
              "AI has the potential to erode social trust and cause social strife in society."
            }
          />
        </div>
        <div className="relative ">
          <Claim
            veracity={3}
            text={
              "AI can enhance the efficiency and transparency of the political decision making process."
            }
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
