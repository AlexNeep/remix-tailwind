import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="mx-auto flex items-center justify-center rounded bg-green-400 py-2 px-4 shadow-sm"
    >
      {children}
    </button>
  );
};

export default Button;
