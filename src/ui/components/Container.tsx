import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div className={clsx("w-full max-w-7xl mx-auto lg:px-10", className)}>
      {children}
    </div>
  );
};

export default Container;
