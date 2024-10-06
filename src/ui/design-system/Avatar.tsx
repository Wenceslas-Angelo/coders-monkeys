import React from "react";
import clsx from "clsx";

type Props = {
  size?: "small" | "medium" | "large";
  src: string;
  alt: string;
};

const Avatar = ({ size = "small", src, alt }: Props) => {
  let sizeStyles = "";
  switch (size) {
    case "small":
      sizeStyles = "w-[24px] h-[24px]";
      break;
    case "medium":
      sizeStyles = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeStyles = "w-[50px] h-[50px]";
      break;
  }
  return (
    <div className={clsx(sizeStyles, "relative bg-gray-400 rounded-full")}>
      <img
        src={src}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;
