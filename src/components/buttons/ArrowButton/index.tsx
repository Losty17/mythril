import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonProps from "./props";

const ArrowButton: React.FC<ButtonProps> = ({
  label,
  className,
  style,
  size,
  onClick,
  href,
}) => {
  const navigate = useNavigate();
  let sizeClass = "";
  let iconSize = "";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      navigate(href);
    } else if (onClick) {
      onClick(event);
    }
  };

  switch (size) {
    case "lg":
      sizeClass = "p-3 text-lg";
      iconSize = "h-7 w-6";
      break;
    case "md":
      sizeClass = "p-2.5 text-md";
      iconSize = "h-6 w-5";
      break;
    case "sm":
      sizeClass = "p-2 text-sm";
      iconSize = "h-5 w-4";
      break;
  }

  const buttonClass =
    "flex " +
    "text-center " +
    "justify-center " +
    "rounded-md " +
    "text-white " +
    "bg-mythril-700 " +
    "hover:bg-mythril-900 " +
    "transition " +
    "duration-150 " +
    "active:scale-[.98] " +
    (sizeClass || "") +
    " " +
    (className || "");

  return (
    <button className={buttonClass} style={style} onClick={handleClick}>
      <span className="ml-1">{label}</span>
      <ChevronRightIcon className={iconSize} />
    </button>
  );
};

export default ArrowButton;
