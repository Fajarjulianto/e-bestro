type ProgressBar = {
  progress: number;
  updateProgress: (param: number) => void;
};

interface Report {
  // Grade
  semester: number;
  updateSemester: (params: number) => void;
  semesterGradeIndex: number;
  updateSemesterGradeIndex: (params: number) => void;
  gradeFile: File | null;
  updateGradeFile: (params: File) => void;
  // Payment
  paymentDate: string;
  updatePaymentDate: (params: string) => void;
  cumulativeGradeIndex: number;
  updatecumulativeGradeIndex: (params: number) => void;
  paymentFile: File | null;
  updatePaymentFile?: (params: File) => void;
}

export { type ProgressBar, type Report };
