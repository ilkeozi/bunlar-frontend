import { Link } from "@nextui-org/link";
import { title, subtitle } from "../../components/primitives";
import DefaultLayout from "@/layouts/default";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Progress,
  cn,
} from "@nextui-org/react";
import {
  AddNoteIcon,
  CopyDocumentIcon,
  DeleteDocumentIcon,
  EditDocumentIcon,
} from "@/components/icons";

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
      <Card>
        <CardHeader className="justify-between">
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "w-32 ",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
              value: "text-foreground/60",
            }}
            label="Veracity"
            value={5}
            maxValue={10}
            showValueLabel={true}
          />
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button variant="bordered">Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              aria-label="Dropdown menu with description"
            >
              <DropdownSection title="Actions" showDivider>
                <DropdownItem
                  key="new"
                  shortcut="⌘N"
                  description="Create a new claim"
                  startContent={<AddNoteIcon className={iconClasses} />}
                >
                  New claim
                </DropdownItem>
                <DropdownItem
                  key="copy"
                  shortcut="⌘C"
                  description="Copy the claim link"
                  startContent={<CopyDocumentIcon className={iconClasses} />}
                >
                  Copy link
                </DropdownItem>
                <DropdownItem
                  key="edit"
                  shortcut="⌘⇧E"
                  description="Allows you to edit the claim"
                  startContent={<EditDocumentIcon className={iconClasses} />}
                >
                  Edit claim
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Danger zone">
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  shortcut="⌘⇧D"
                  description="Permanently delete the claim"
                  startContent={
                    <DeleteDocumentIcon
                      className={cn(iconClasses, "text-danger")}
                    />
                  }
                >
                  Delete claim
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </CardHeader>
        <Divider />
        <CardBody>
          <h2>The use of AI in programming should be welcomed.</h2>
        </CardBody>
        <Divider />
        <CardFooter className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://avatars.githubusercontent.com/u/64313281?v=4"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                İlker Özin
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @ilkeozi
              </h5>
            </div>
            <Button
              className={""}
              color="primary"
              radius="full"
              size="sm"
              variant={"solid"}
            >
              Follow
            </Button>
          </div>
          <Button
            className={""}
            color="primary"
            radius="full"
            size="sm"
            variant={"solid"}
          >
            Follow
          </Button>
        </CardFooter>
      </Card>
    </DefaultLayout>
  );
}
