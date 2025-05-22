import { create } from "zustand";
import { type ProgressBar, type Report } from "@/app/context/type";

const useProgressBar = create<ProgressBar>((set) => ({
  progress: 0,
  updateProgress: (newProgress: number) => set({ progress: newProgress }),
}));

const useReport = create<Report>((set) => ({
  // Grade
  semester: 0,
  updateSemester: (newSemester) => set({ semester: newSemester }),
  semesterGradeIndex: 0,
  updateSemesterGradeIndex: (newGrade) => set({ semesterGradeIndex: newGrade }),
  gradeFile: null,
  updateGradeFile: (newFile: File) => set({ gradeFile: newFile }),
  // Payment
  paymentDate: "",
  updatePaymentDate: (params) => set({ paymentDate: params }),
  cumulativeGradeIndex: 0,
  updatecumulativeGradeIndex: (newGrade) =>
    set({ cumulativeGradeIndex: newGrade }),
  paymentFile: null,
  updatePaymentFile: (params: File) => set({ paymentFile: params }),
}));

export { useProgressBar, useReport };
