import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    red_A700: "bg-red-A700 text-white-A700_01",
    white_A700_01: "bg-white-A700_01",
    blue_gray_900: "bg-blue_gray-900 text-white-A700_01",
  },
};
const sizes = {
  md: "h-[60px] px-[15px]",
  sm: "h-[52px] px-6 text-base",
  xs: "h-[48px] px-0.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "white_A700_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["red_A700", "white_A700_01", "blue_gray_900"]),
};

export { Button };
