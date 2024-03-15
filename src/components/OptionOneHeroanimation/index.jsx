import React from "react";
import { Button, Text, Img } from "./..";

export default function OptionOneHeroanimation({
  interiorsmade = "Interiors Made easy",
  indulgein = "Indulge in Uncompromising Quality and Timeless Elegance for your Home Projects",
  chatWithUs = "Chat with Us",
  ...props
}) {
  return (
    <div {...props}>
      <Img
        src="images/img_screenshot_2023.png"
        alt="screenshot2023"
        className="justify-center h-[734px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
      />
      <div className="flex w-full h-full pl-20 pr-14 left-0 bottom-0 right-0 top-0 py-20 m-auto md:p-5 bg-gradient absolute">
        <div className="flex flex-col items-start w-[47%] gap-[49px] my-[92px]">
          <div className="flex flex-col self-stretch gap-6">
            <Text size="5xl" as="p" className="w-[84%] md:w-full !text-white-A700_01 !font-outfit">
              {interiorsmade}
            </Text>
            <Text size="md" as="p" className="!text-white-A700_01">
              {indulgein}
            </Text>
          </div>
          <Button color="red_A700" size="sm" shape="square" className="sm:px-5 capitalize font-medium min-w-[149px]">
            {chatWithUs}
          </Button>
        </div>
      </div>
    </div>
  );
}

