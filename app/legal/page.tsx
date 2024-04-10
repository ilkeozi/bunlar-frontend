import { title, subtitle } from "../../components/primitives";

export default function PrivacyPage() {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div>
      <div>
        <h1 className={title()}>Legal&nbsp;</h1>
        <h4 className={subtitle({ class: "mt-4" })}>Bunlar.org</h4>
      </div>
      <section className="flex flex-col gap-4 md:py-10"></section>
    </div>
  );
}
