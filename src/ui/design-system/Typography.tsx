import React from "react";
import clsx from "clsx";

type Props = {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  children: React.ReactNode;
  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string;
};

const Typography = ({
  variant = "h3",
  component: Component = "div",
  children,
  theme = "black",
  weight = "regular",
  className,
}: Props) => {
  let variantStyles = "";
  switch (variant) {
    case "display":
      variantStyles = "text-8xl";
      break;
    case "h1":
      variantStyles = "text-7xl";
      break;
    case "h2":
      variantStyles = "text-6xl";
      break;
    case "h3":
      variantStyles = "text-5xl";
      break;
    case "h4":
      variantStyles = "text-4xl";
      break;
    case "h5":
      variantStyles = "text-3xl";
      break;
    case "lead":
      variantStyles = "text-2xl";
      break;
    case "body-lg":
      variantStyles = "text-lg";
      break;
    case "body-base":
      variantStyles = "text-base";
      break;
    case "body-sm":
      variantStyles = "text-sm";
      break;
    case "caption1":
      variantStyles = "text-caption1";
      break;
    case "caption2":
      variantStyles = "text-caption2";
      break;
    case "caption3":
      variantStyles = "text-caption3";
      break;
    case "caption4":
      variantStyles = "text-caption4";
      break;
  }

  let themeStyles = "";
  switch (theme) {
    case "black":
      themeStyles = "text-gray";
      break;
    case "gray":
      themeStyles = "text-gray-700";
      break;
    case "white":
      themeStyles = "text-white";
      break;
    case "primary":
      themeStyles = "text-primary";
      break;
    case "secondary":
      themeStyles = "text-secondary";
      break;
  }

  let weightStyles = "";
  switch (weight) {
    case "regular":
      weightStyles = "font-normal";
      break;
    case "medium":
      weightStyles = "font-medium";
      break;
  }

  return (
    <Component
      className={clsx(variantStyles, themeStyles, weightStyles, className)}
    >
      {children}
    </Component>
  );
};

export default Typography;
