import { create } from "zustand";
import { type ProgressBar, type Report } from "@/context/type";

const useProgressBar = create<ProgressBar>((set) => ({
  progress: 0,
  updateProgress: (newProgress: number) => set({ progress: newProgress }),
}));

const useReport = create<Report>((set) => ({
  // Grade
  semester: 0,
  updateSemester: (newSemester) => set({ semester: newSemester }),
  semesterGradeIndex: null,
  updateSemesterGradeIndex: (newGrade) => set({ semesterGradeIndex: newGrade }),
  gradeFile: null,
  updateGradeFile: (newFile) => set({ gradeFile: newFile }),
  // Payment
  paymentDate: "",
  updatePaymentDate: (params) => set({ paymentDate: params }),
  cumulativeGradeIndex: null,
  updateCumulativeGradeIndex: (newGrade) =>
    set({ cumulativeGradeIndex: newGrade }),
  paymentFile: null,
  updatePaymentFile: (params) => set({ paymentFile: params }),
}));

export { useProgressBar, useReport };
