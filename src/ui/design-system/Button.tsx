import React from "react";
import clsx from "clsx";
import { IconType } from "react-icons";
import Spinner from "./Spinner";

type Props = {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
  icon?: IconType;
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
  icon: Icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  className,
  onClick,
}: Props) => {
  let sizeStyles = "";
  let iconSize = 0;
  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "icon"
          ? "w-[40px] h-[40px] flex justify-center items-center"
          : "px-[14px] py-[12px]"
      }`;
      iconSize = 18;
      break;
    case "medium":
      sizeStyles = `text-caption2 font-medium ${
        variant === "icon"
          ? "w-[50px] h-[50px] flex justify-center items-center"
          : "px-[18px] py-[15px]"
      }`;
      iconSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant === "icon"
          ? "w-[60px] h-[60px] flex justify-center items-center"
          : "px-[22px] py-[18px]"
      }`;
      iconSize = 24;
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
      if (iconTheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      } else if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      } else {
        variantStyles =
          "bg-gray-700 hover:bg-gray-600/50 text-white rounded-full";
      }
      break;
  }

  return (
    <button
      type={type}
      className={clsx(
        sizeStyles,
        variantStyles,
        className,
        isLoading && "cursor-wait",
        "relative"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "icon" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {Icon && variant === "icon" ? (
          <Icon size={iconSize} />
        ) : (
          <div className={clsx(Icon && "flex items-center gap-1")}>
            {Icon && iconPosition === "left" && <Icon size={iconSize} />}
            {children}
            {Icon && iconPosition === "right" && <Icon size={iconSize} />}
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;
