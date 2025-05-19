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

export { signOut, getGradeTarget };
