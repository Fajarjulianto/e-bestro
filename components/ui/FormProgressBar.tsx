import React from 'react';

interface FormProgressBarProps {
  progress: number; // 0 to 1
}

export default function FormProgressBar({ progress }: FormProgressBarProps) {
  return (
    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-10">
      <div
        className="h-full bg-secondary transition-all duration-300"
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
}