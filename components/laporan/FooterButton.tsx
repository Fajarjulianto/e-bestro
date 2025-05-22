"use client";

import React, { JSX } from "react";

import Button from "../Button";

// Context
import { useProgressBar } from "@/context/store";
import { useReport } from "@/context/store";
function FooterButton(): JSX.Element {
  const { updateProgress } = useProgressBar();
  const {
    updateCumulativeGradeIndex,
    updateGradeFile,
    updatePaymentDate,
    updatePaymentFile,
    updateSemester,
    updateSemesterGradeIndex,
    semesterGradeIndex,
  } = useReport();

  function handleRemoveValue() {
    updateCumulativeGradeIndex(null);
    updateGradeFile(null);
    updatePaymentDate("");
    updatePaymentFile(null);
    updateSemester(null);
    updateSemesterGradeIndex(null);
    updateProgress(0);
    console.log(semesterGradeIndex);
  }
  return (
    <div className="col-span-1 md:col-span-2">
      <div className="flex gap-4 h-10 justify-center">
        <Button
          onClick={handleRemoveValue}
          className="bg-white px-10 py-2 hover:text-primary hover:bg-secondary text-secondary border border-secondary"
        >
          Batal
        </Button>
        <Button className="bg-secondary text-white hover:bg-white hover:text-primary hover:border-primary border border-secondary py-2 px-11">
          Kirim
        </Button>
      </div>
    </div>
  );
}

export default FooterButton;
