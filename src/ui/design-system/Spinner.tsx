import React from "react";
import clsx from "clsx";

type Props = {
  size?: "small" | "medium" | "large" | "extra-large";
  variant?: "primary" | "white";
};

const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let sizeStyles = "";
  switch (size) {
    case "small":
      sizeStyles = "w-5 h-5";
      break;
    case "medium":
      sizeStyles = "w-9 h-9";
      break;
    case "large":
      sizeStyles = "w-12 h-12";
      break;
    case "extra-large":
      sizeStyles = "w-32 h-32";
      break;
  }

  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles = "text-primary";
      break;
    case "white":
      variantStyles = "text-white";
      break;
  }
  return (
    <svg
      className={clsx(sizeStyles, variantStyles, "animate-spin")}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
  );
};

export default Spinner;
