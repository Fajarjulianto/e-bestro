"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// signing out user
async function signOut() {
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    redirect("/login");
  } catch (error) {
    console.error("Sign out failed:", error);
  }
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
}) {
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
    console.error("Gagal mengunggah:", error);
    return error;
  }
}

export {
  signOut,
  getGradeTarget,
  getStudentNameById,
  getScholarshipApproval,
  getStudentData,
  uploadGradeDocument,
  uploadPaymentDocument,
  uploadGradeReport,
};
