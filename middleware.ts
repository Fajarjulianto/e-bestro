import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/dashboard",
    "/laporan",
    "/berkas-administrasi",
    "/perkembangan-diri",
    "/prestasi",
    "/profile",
    "/admin",
  ],
};
