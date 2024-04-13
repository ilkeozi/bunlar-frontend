import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Progress,
} from "@nextui-org/react";
import { ClaimMenu } from "./claim-menu";

export type ClaimProps = {
  text: string;
  veracity?: number;
};

export const Claim = (props: ClaimProps) => {
  return (
    <Card>
      <CardHeader className="justify-between">
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "w-32",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
            value: "text-foreground/60",
          }}
          label="Veracity"
          value={props.veracity || 0}
          maxValue={10}
          showValueLabel={true}
        />
        <ClaimMenu />
      </CardHeader>
      <Divider />
      <CardBody>
        <h2>{props.text}</h2>
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
        </div>
        <Button color="primary" radius="full" size="sm" variant={"solid"}>
          Follow
        </Button>
      </CardFooter>
    </Card>
  );
};
