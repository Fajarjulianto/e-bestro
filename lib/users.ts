"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function signOut() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  }

  console.log(data);
  redirect("/login");
}

export { signOut };
