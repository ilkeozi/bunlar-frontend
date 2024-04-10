import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "../components/primitives";
import { FooterList } from "@/components/footer-list";

type Article = {
  title: string;
  content: string;
};

export default function Home() {
  return (
    <div>
      <section className="container mx-auto gap-4 py-8 md:py-10 text-center">
        <div className="inline-block  text-center ">
          <h1 className={title()}>Explore&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>debates&nbsp;</h1>
          <h1 className={title()}>
            and participate in structured discussions.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            <div>Is bıdı</div>
          </h4>
        </div>
        <div className="container mx-auto flex flex-wrap gap-4 py-8 justify-center">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            Politics
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            Philosophy
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            Science
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            Ethics
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            Technology
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            Education
          </Link>
          <Link
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            See More
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8 ">
            <FooterList />
            <FooterList />
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <FooterList />
            <FooterList />
          </div>
        </div>
      </section>
    </div>
  );
}
