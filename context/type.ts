type ProgressBar = {
  progress: number;
  updateProgress: (param: number) => void;
};

interface Report {
  // Grade
  semester: number | null;
  updateSemester: (params: number | null) => void;
  semesterGradeIndex: number | null;
  updateSemesterGradeIndex: (params: number | null) => void;
  gradeFile: File | null;
  updateGradeFile: (params: File | null) => void;
  // Payment
  paymentDate: string;
  updatePaymentDate: (params: string) => void;
  cumulativeGradeIndex: number | null;
  updateCumulativeGradeIndex: (params: number | null) => void;
  paymentFile: File | null;
  updatePaymentFile: (params: File | null) => void;
}

export { type ProgressBar, type Report };
