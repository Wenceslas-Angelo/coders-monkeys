import React from "react";
import clsx from "clsx";

type Props = {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
  icon?: unknown;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  type = "button",
  children,
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  className,
  onClick,
}: Props) => {
  let sizeStyles = "";
  switch (size) {
    case "small":
      sizeStyles = "text-caption3 font-medium px-[14px] py-[12px]";
      break;
    case "medium":
      sizeStyles = "text-caption2 font-medium px-[18px] py-[15px]";
      break;
    case "large":
      sizeStyles = "text-caption1 font-medium px-[22px] py-[18px]";
      break;
  }

  let variantStyles = "";
  switch (variant) {
    case "accent":
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-500 text-gray-600 cursor-not-allowed rounded";
      break;
    case "icon":
      variantStyles = "";
      break;
  }

  return (
    <button
      type={type}
      className={clsx(sizeStyles, variantStyles, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
