"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
// import type { Database } from "./supabase";
// import { PostgrestError } from "@supabase/supabase-js";

async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  }
  redirect("/login");
}

async function getGradeTarget(user_id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gradeTarget")
    .select("*")
    .eq("user_id", user_id);

  if (error) {
    console.log(error);
    return error;
  }
  return data;
}

async function getStudentNameById(user_id: string) {
  const supabase = await createClient();
  console.log(user_id);
  const { data, error } = await supabase
    .from("student")
    .select("name")
    .eq("user_id", user_id);

  if (error) {
    console.log(error);
  }

  console.log(data);

  return data;
}

async function getScholarshipApproval(user_id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("scholarshipApproval")
    .select("*")
    .eq("user_id", user_id);
  if (error) {
    console.log(error);
  }

  return data;
}

export { signOut, getGradeTarget, getStudentNameById, getScholarshipApproval };
