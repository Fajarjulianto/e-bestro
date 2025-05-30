"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// signing out user
async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Sign out failed:", error);
    return error.message;
  }

  redirect("/login");
}

// ------------------ getting ---------------------

// getting grade target by user_id
async function getGradeTarget(user_id: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("gradeTarget")
      .select("*")
      .eq("user_id", user_id);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching grade target:", error);
    return error;
  }
}

// getting student name by user_id
async function getStudentNameById(user_id: string) {
  try {
    const supabase = await createClient();
    console.log(user_id);
    const { data, error } = await supabase
      .from("student")
      .select("name")
      .eq("user_id", user_id);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching student name:", error);
    return error;
  }
}

// getting all student data by user_id
async function getStudentData(user_id: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("student")
      .select("*")
      .eq("user_id", user_id);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching student data:", error);
    return error;
  }
}

// Fetching scholarship approval data
async function getScholarshipApproval(user_id: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("scholarshipApproval")
      .select("*")
      .eq("user_id", user_id);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching scholarship approval:", error);
    return error;
  }
}

// uploading payment PDF document to DB
async function uploadPaymentDocument(file: File, user_id: string) {
  const supabase = await createClient();
  if (file?.type !== "application/pdf") {
    throw new Error("File must be a PDF");
  }

  try {
    const allowedFileSize = 5 * 1024 * 1024; // 5 MB
    if (file?.size > allowedFileSize) {
      throw new Error("File size exceeds 5 MB");
    }

    const sendFileNameToDB = supabase
      .from("document")
      .insert({
        pdf: file.name,
      })
      .eq("user_id", user_id);

    if ((await sendFileNameToDB) instanceof Error) {
      throw new Error("Failed to insert file name into database");
    }

    const { error } = await supabase.storage
      .from("document-bucket")
      .upload(`pdf/${file.name}`, file);

    if (error) {
      throw new Error("File sudah ada di database");
    }
  } catch (error) {
    console.error("Error uploading payment document:", error);
    return error;
  }
}

// uploading grade PDF document to DB
async function uploadGradeDocument(file: File, user_id: string) {
  try {
    const supabase = await createClient();
    if (file?.type !== "application/pdf") {
      throw new Error("File must be a PDF");
    }

    const allowedFileSize = 5 * 1024 * 1024; // 5 MB

    if (file?.size > allowedFileSize) {
      throw new Error("File size exceeds 5 MB");
    }

    const sendFileNameToDB = supabase
      .from("document")
      .insert({
        pdf: file.name,
      })
      .eq("user_id", user_id);

    if ((await sendFileNameToDB) instanceof Error) {
      throw new Error("File sudah ada di database");
    }

    const { error } = await supabase.storage
      .from("document-bucket")
      .upload(`pdf/${file.name}`, file);

    if (error) {
      throw new Error("File sudah ada di database");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return error;
    }
  }
}

async function getStudentProfile(user_id: string) {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("student")
      .select("*, image(*)")
      .eq("user_id", user_id);

    if (error) {
      throw new Error("Gagal mengambil data profil Mahasiswa");
    }
    if (!data || data.length === 0) {
      throw new Error("Data profil Mahasiswa tidak ditemukan");
    }

    const fileName = data[0]?.image?.[0]?.fileName as string;
    // console.log("File name:", fileName);
    const profilePicture = await supabase.storage
      .from("profile-picture")
      .createSignedUrl(`avatars/${fileName}`, 60 * 60 * 24 * 7);

    // console.log(profilePicture.data?.signedUrl);

    const updatedData = data.map((student) => ({
      ...student,
      profilePicture: profilePicture.data?.signedUrl,
    }));

    return updatedData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return error.message as string;
    }
  }
}

// ------------------ uploading ---------------------

// uploading grade report to DB
async function uploadGradeReport({
  semester,
  gradeIndex,
  cumulativeGradeIndex,
  paymentDate,
  user_id,
}: {
  semester: number;
  gradeIndex: number;
  cumulativeGradeIndex: number;
  paymentDate: string;
  user_id: string;
}): Promise<void | Error> {
  try {
    if (
      semester === null ||
      gradeIndex === null ||
      cumulativeGradeIndex === null ||
      paymentDate === ""
    ) {
      throw new Error("Mohon lengkapi semua field sebelum mengirim.");
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from("gradeReport")
      .insert({
        semester,
        gradeIndex,
        cumulativeGradeIndex,
        paymentDate,
        user_id,
      })
      .eq("user_id", user_id);

    if (error) throw error;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Gagal mengunggah:", error);
      return error;
    }
  }
}

async function uploadSelfProgression({
  academicProgress,
  challenges,
  nonAcademicEvaluation,
  solvingChallenge,
  academicTarget,
  nonAcademicTarget,
  strategy,
  user_id,
}: {
  academicProgress: string;
  challenges: string;
  nonAcademicEvaluation: string;
  solvingChallenge: string;
  academicTarget: string;
  nonAcademicTarget: string;
  strategy: string;
  user_id: string;
}): Promise<string | void> {
  const supabase = await createClient();
  try {
    const { error } = await supabase.from("selfProgression").insert({
      academicProgress,
      challenges,
      nonAcademicEvaluation,
      solvingChallenge,
      academicTarget,
      nonAcademicTarget,
      strategy,
      user_id,
    });

    if (
      !academicProgress ||
      !challenges ||
      !nonAcademicEvaluation ||
      !solvingChallenge ||
      !academicTarget ||
      !nonAcademicTarget ||
      !strategy
    ) {
      throw new Error("Mohon lengkapi semua field sebelum mengirim.");
    }

    if (error) {
      console.log(error);
      throw new Error("Gagal mengunggah data perkembangan diri");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error uploading self progression:", error);
      return error?.message;
    }
  }
}

export {
  signOut,
  getStudentProfile,
  getGradeTarget,
  getStudentNameById,
  getScholarshipApproval,
  getStudentData,
  uploadGradeDocument,
  uploadPaymentDocument,
  uploadGradeReport,
  uploadSelfProgression,
};
