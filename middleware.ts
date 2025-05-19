import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  // const supabase = await createClient();
  // const { data } = await supabase.auth.getUser();
  // const userID = data.user?.id as string;

  // const grade = await getGradeTarget(userID);
  // console.log(grade);
  return await updateSession(request);
}

export const config = {
  matcher: ["/dashboard", "/laporan", "/berkas-administrasi"],
};
