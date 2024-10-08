import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  padding_x?: string;
  padding_y?: string;
};

const Box = ({
  children,
  className,
  padding_x = "px-9",
  padding_y = "py-9",
}: Props) => {
  return (
    <div
      className={clsx(
        "w-full border border-gray-400 rounded",
        padding_x,
        padding_y,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
