import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
// import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  // const supabase = await createClient();
  // const { data } = await supabase.auth.getUser();
  // console.log(data);

  return await updateSession(request);
}

export const config = {
  matcher: ["/dashboard", "/laporan", "/berkas-administrasi"],
};
