import type { ReactElement } from "react";

interface ButtonProps {
  varient: "primary" | "secondary";
  text: string;
  startIcon: ReactElement;
}

const varientClasses = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-blue-100 text-blue-600",
};

const defaultStyle = "px-4 py-2 rounded-full flex gap-2 items-center";

export const Button = ({ varient, text, startIcon }: ButtonProps) => {
  return (
    <button className={varientClasses[varient] + " " + defaultStyle}>
      {startIcon} <h1 className="font-semibold">{text}</h1>
    </button>
  );
};
