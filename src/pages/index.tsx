import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "../components/primitives";
import { GithubIcon } from "../components/icons";
import DefaultLayout from "@/layouts/default";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { FooterList } from "@/components/footer-list";

type Article = {
  title: string;
  content: string;
};

export const getStaticProps = (async (context) => {
  const res = await fetch("https://api-test.bunlar.org/articles");
  const staticProps = await res.json();
  return {
    props: {
      staticProps,
    },
  };
}) satisfies GetStaticProps<{ staticProps: Article[] }>;

export default function IndexPage({
  staticProps,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout>
      <section className="flex flex-col mx-auto max-w-7xl items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block  text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
          <h1 className={title()}>
            websites regardless of your design experience.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            <div key={staticProps[0].title}>{staticProps[0].title}</div>
          </h4>
        </div>
        <div className="flex gap-4">
          <Link
            isExternal
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
      <section className="py-8">
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <FooterList />
            <FooterList />
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <FooterList />
            <FooterList />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
