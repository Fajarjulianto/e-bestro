import "@/styles/globals.css";

// import { createClient } from '@/utils/supabase/server'
// import { cookies } from 'next/headers'

export const metadata = {
  title: "Bestro",
  description: "Sholarship App By Petrokimia Gresik",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
