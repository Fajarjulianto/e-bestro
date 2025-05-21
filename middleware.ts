import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
// import { createClient } from "./utils/supabase/server";
import { getStudentNameById } from "./lib/users";

export async function middleware(request: NextRequest) {
  // const supabase = await createClient();
  // const { data } = await supabase.auth.getUser();
  // console.log(data);
  const data = await getStudentNameById("83e41291-4907-4d08-85e5-5064b70cd10c");
  console.log(data);
  return await updateSession(request);
}

export const config = {
  matcher: ["/dashboard", "/laporan", "/berkas-administrasi"],
};
