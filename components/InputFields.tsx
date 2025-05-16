import React, { JSX } from "react";

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export default function InputField({
  label,
  id,
  type = "text",
  // value,
  // onChange,
  placeholder,
  required = false,
}: InputFieldProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        // value={value}
        // onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}
