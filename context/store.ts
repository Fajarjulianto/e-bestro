import { create } from "zustand";
import { type ProgressBar, type Report, type Evaluation } from "@/context/type";

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

const useEvaluation = create<Evaluation>((set) => ({
  // current semester
  academicProgress: "",
  updateAcademicProgress: (newProgress) =>
    set({ academicProgress: newProgress }),
  challenges: "",
  updateChallenges: (newChallenges) => set({ challenges: newChallenges }),
  solvingChallenge: "",
  updateSolvingChallenge: (newSolvingChallenge) =>
    set({ solvingChallenge: newSolvingChallenge }),
  nonAcademicEvaluation: "",
  updateNonAcademicEvaluation: (newEvaluation) =>
    set({ nonAcademicEvaluation: newEvaluation }),

  // next semester
  academicTarget: "",
  updateAcademicTarget: (newTarget) => set({ academicTarget: newTarget }),
  nonAcademicTarget: "",
  updateNonAcademicTarget: (newTarget) => set({ nonAcademicTarget: newTarget }),
  strategy: "",
  updateStrategy: (newStrategy) => set({ strategy: newStrategy }),
}));

export { useProgressBar, useReport, useEvaluation };
