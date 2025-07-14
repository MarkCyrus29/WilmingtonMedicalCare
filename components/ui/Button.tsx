import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({
  title,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `hover:cursor-pointer bg-secondary py-3 px-6 rounded-xl text-xl text-white shadow-lg transition-opacity hover:opacity-80 ` +
        className
      }
    >
      {title}
    </button>
  );
}

export default Button;
