import React from 'react';

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export function FormInput({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  required,
  className = '',
}: FormInputProps) {
  return (
    <div className={className}>
      <label className="block text-sm mb-1 font-medium text-gray-700">
        {label} {required && <span className="text-gray-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-gray-200 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
      />
    </div>
  );
}