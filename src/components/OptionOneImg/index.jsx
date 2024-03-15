import React from "react";
import { Img } from "./..";

export default function OptionOneImg({ ...props }) {
  return (
    <div {...props}>
      <Img
        src="images/img_img.png"
        alt="img_one"
        className="justify-center h-[863px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
      />
      <Img
        src="images/img_frame_427319107.png"
        alt="image"
        className="h-[487px] w-[94%] right-0 top-[12%] m-auto object-cover absolute"
      />
      <Img
        src="images/img_img_863x579.png"
        alt="img_three"
        className="justify-center h-[863px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
      />
    </div>
  );
}
