import React, { useEffect, useState } from "react";
import { Button, Descriptionstyle } from "./..";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"; // Assuming you have a CSS file for styling

export default function OptionOneHeroAnimation({
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change this value to adjust the delay between image transitions

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div {...props} style={{ marginTop: "60px", position: "relative" }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`w-full absolute ${
            index === currentImageIndex ? "fade-in zoom-out" : "hidden"
          }`}
        />
      ))}
      <div className="flex w-full h-full pl-20 pr-14 left-0 bottom-0 right-0 top-0 py-20 m-auto md:p-5 bg-gradient absolute">
        <div className="flex flex-col items-start w-[47%] gap-[49px] my-[92px]">
          <div className="flex flex-col self-stretch gap-6">
            <Descriptionstyle
              size="5xl"
              as="p"
              className="w-[84%] md:w-full !text-white-A700_01 !font-outfit"
            >
              {interiorsmade}
            </Descriptionstyle>
            <Descriptionstyle size="md" as="p" className="!text-white-A700_01">
              {indulgein}
            </Descriptionstyle>
          </div>
          <Button
            color="red_A700"
            size="sm"
            shape="square"
            className="sm:px-5 capitalize font-medium min-w-[149px]"
          >
            {chatWithUs}
          </Button>
        </div>
      </div>
    </div>
  );
}






