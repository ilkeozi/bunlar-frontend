import fs from "fs";
import { title, subtitle } from "../../components/primitives";
import DefaultLayout from "@/layouts/default";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export default function PrivacyPage({ mdxSource }: Props) {
  return (
    <DefaultLayout>
      <div className="container mx-auto gap-4 py-8 md:py-10">
        <div>
          <h1 className={title()}>Privacy Policy</h1>
          <h4 className={subtitle({ class: "mt-4" })}>Bunlar.org</h4>
        </div>
        <br />
        <div className="space-y-4">
          <MDXRemote {...mdxSource} />
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api-test.bunlar.org/articles/65f1f2b65c131fb96c3fc461"
  );
  const article = await res.json();

  const mdxSource = await serialize(article.content);
  return { props: { mdxSource } };
}
