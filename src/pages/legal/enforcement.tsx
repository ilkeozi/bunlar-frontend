import { title, subtitle } from "../../components/primitives";
import DefaultLayout from "@/layouts/default";

export default function EnforcementPage() {
  return (
    <DefaultLayout>
      <div>
        <h1 className={title()}>Law Enforcement Guidelines</h1>
        <h4 className={subtitle({ class: "mt-4" })}>Bunlar.org</h4>
      </div>
    </DefaultLayout>
  );
}
