import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  type = 'button',
  onClick,
  className = '',
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}