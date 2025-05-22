"use client";

import React from "react";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  //   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

// Context
import { useReport, useProgressBar } from "@/app/context/store";

function FormInputSemester({
  label,
  placeholder,
  type = "text",
  value,
  //   onChange,
  required,
  className = "",
}: FormInputProps) {
  const { semesterGradeIndex, updateSemesterGradeIndex } = useReport();
  const { progress, updateProgress } = useProgressBar();

  const isHasValue = React.useRef(false);

  React.useEffect(() => {
    if (Boolean(semesterGradeIndex && !isHasValue.current)) {
      updateProgress(Math.min(progress + 0.1, 1));
      isHasValue.current = true;
    }

    if (Boolean(!semesterGradeIndex && isHasValue.current)) {
      updateProgress(Math.min(progress - 0.1, 1));
      isHasValue.current = false;
    }
  }, [semesterGradeIndex]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const data = Number(event.target.value);
    updateSemesterGradeIndex(data);
  }
  return (
    <div className={className}>
      <label className="block text-sm mb-1 font-medium text-gray-700">
        {label} {required && <span className="text-gray-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(event) => handleChange(event)}
        className="w-full bg-gray-200 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
      />
    </div>
  );
}

export default FormInputSemester;
