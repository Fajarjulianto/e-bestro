"use client";

import React from "react";

//context
import { useProgressBar } from "@/app/context/store";

interface Progress {
  progress: number; // 0 to 1
}

export default function FormProgressBar() {
  const { progress }: Progress = useProgressBar();
  return (
    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-10">
      <div
        className="h-full bg-secondary transition-all duration-300"
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
}
