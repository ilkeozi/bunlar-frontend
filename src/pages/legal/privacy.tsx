import fs from "fs";
import { title, subtitle } from "../../components/primitives";
import DefaultLayout from "@/layouts/default";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export default function PrivacyPage({ mdxSource }: Props) {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const text = "Almost before we knew it, we had left the ground.";

  return (
    <DefaultLayout>
      <div className="container mx-auto gap-4 py-8 md:py-10">
        <div>
          <h1 className={title()}>Privacy Policy</h1>
          <h4 className={subtitle({ class: "mt-4" })}>Bunlar.org</h4>
        </div>
        <br />
        <MDXRemote {...mdxSource} />
        <h1>{text}</h1>
        <h2>{text}</h2>
        <h3>{text}</h3>
        <h4>{text}</h4>
        <h5>{text}</h5>
        <h6>{text}</h6>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere 65f1f2b65c131fb96c3fc461
  const res = await fetch(
    "https://api-test.bunlar.org/articles/65f1f2b65c131fb96c3fc461"
  );
  const article = await res.json();
  const multiline = ` 
  ## Heading
  Some **mdx** text, with a component
`;
  const content = "## Hello World ";
  const mdxSource = await serialize(multiline);
  return { props: { mdxSource } };
}
