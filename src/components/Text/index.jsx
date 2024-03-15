import React from "react";

const sizes = {
  "5xl": "text-[88px] font-medium leading-[100px]",
  xs: "text-base font-medium",
  lg: "text-[28px] font-normal leading-[120%]",
  s: "text-xl font-normal leading-[140%]",
  "2xl": "text-[40px] font-medium leading-[134.02%]",
  "3xl": "text-[42px] font-medium leading-[140%]",
  "4xl": "text-[64px] font-light leading-[87px]",
  xl: "text-[32px] font-normal leading-[134.02%]",
  md: "text-2xl font-normal leading-8",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
