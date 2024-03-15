import React from "react";
import { Button, Img, Descriptionstyle } from "./..";

export default function OptionOneImage({ jeganr = "Jegan. R", p7yearsof = "7 Years of Experience", ...props }) {
  return (
    <div {...props}>
      <div className="self-stretch h-[582px] relative">
        <Img
          src="images/img_rectangle_24.png"
          alt="image"
          className="justify-center h-[582px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute transition-transform transform-gpu scale-100 hover:scale-110"
        />
        <div className="flex items-center w-[70%] bottom-[4%] left-[6%] m-auto absolute">
          <div className="p-[18px] bg-white-A700_f2 flex-1">
            <div className="flex flex-col pt-0.5 gap-[3px]">
              <Descriptionstyle size="lg" as="p" className="!text-gray-800 !font-outfit">
                {jeganr}
              </Descriptionstyle>
              <div className="flex pt-[3px]">
                <Descriptionstyle as="p" className="!text-gray-700_01 !font-outfit !font-normal">
                  {p7yearsof}
                </Descriptionstyle>
              </div>
            </div>
          </div>
          <Button color="red_A700" shape="square" className="self-end w-[48px]">
            <Img src="images/img_right_16px.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
}

