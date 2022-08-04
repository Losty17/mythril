import React from "react";

export default interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size: "lg" | "md" | "sm";
  href?: string;
}
