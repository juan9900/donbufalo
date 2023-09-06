import styled from "@emotion/styled";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const CustomTabs = styled(Tabs)`
  .bg-default-100 {
    background-color: #ffffff;
    box-shadow: 1px 1px 10px #00000035;
  }

  .text-default-500 {
    color: #393939;
  }

  .bg-black {
    background-color: #ab2b2b;
  }

  .bg-background {
    background-color: #592c33;
  }

  .group {
    color: #ffffff !important;
  }
`;
export default function BufaloTabs({ tabs }) {
  console.log(tabs);
  const validTabs = tabs.filter((tab) => tab.content !== "");
  return (
    <div className="flex  w-full mx-auto flex-col justify-start  h-[50rem] lg:h-[70rem] relative ">
      <CustomTabs
        className="mx-auto mt-10"
        aria-label="Dynamic tabs"
        items={validTabs}
      >
        {(item) => (
          <Tab className=" flex-1" key={item.title} title={item.title}>
            <Card className=" h-full h-[35rem] lg:h-[50rem] ">
              <CardBody className="h-fit ">
                <div className=" w-full p-0 flex items-start h-full relative ">
                  <Image
                    className=" align-bottom w-full h-full"
                    src={item.content}
                    fill
                    objectFit="contain"
                    sizes="(max-width: 768px) 80vw, 70vw"
                    alt={`Bufalo Registro ${item.title}`}
                  />
                </div>
              </CardBody>
            </Card>
          </Tab>
        )}
      </CustomTabs>
    </div>
  );
}
