import React from "react";
import { Button, Text } from "./..";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OptionOneHeroanimation({
  interiorsmade = "Interiors Made easy",
  indulgein = "Indulge in Uncompromising Quality and Timeless Elegance for your Home Projects",
  chatWithUs = "Chat with Us",
  images = [
    { src: "images/img_screenshot_2023.png", alt: "screenshot2023" },
    { src: "images/img_home2.svg", alt: "home2" },
    { src: "images/img_home3.svg", alt: "home3" },
    // Add more images as needed
  ],
  ...props
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change this value to adjust autoplay speed in milliseconds
  };

  return (
    <div {...props}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="w-full" />
          </div>
        ))}
      </Slider>
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


