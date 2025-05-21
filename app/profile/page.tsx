"use client";

import React, { JSX, useEffect, useState } from "react";
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";
<<<<<<< HEAD
import { createClient } from "@utils/supabase/client";
=======
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
>>>>>>> 5594127 (Adding function to get student Data for side-bar and fixing error at profile page)

// Components
import TitleBanner from "@/components/utils/TitleBanner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/utils/app-sidebar";
import Button from "@/components/Button";
import { createClient } from "@/utils/supabase/client";

interface ProfileData {
  full_name: string;
  gender: string;
  birth_place: string;
  university: string;
  faculty: string;
  study_program: string;
  email: string;
  whatsapp: string;
  address: string;
  postal_code: string;
  profile_image: string;
}

function Profile(): JSX.Element {
  const [profile, setProfile] = useState<ProfileData | null>(null);
<<<<<<< HEAD
  const [uploading, setUploading] = useState(false);
=======
>>>>>>> 5594127 (Adding function to get student Data for side-bar and fixing error at profile page)
  const supabase = createClient();

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .single();

      if (!error && data) {
        setProfile(data as ProfileData);
      } else {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, [supabase]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      alert("Ukuran file maksimal 1 MB");
      return;
    }

    try {
      setUploading(true);
      const fileExt = file.name.split(".").pop();
      const filePath = `profile-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);

      const { error: updateError } = await supabase
        .from("profiles")
        .update({ profile_image: data.publicUrl })
        .eq("email", profile?.email);

      if (!updateError) {
        setProfile((prev) => prev && { ...prev, profile_image: data.publicUrl });
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Terjadi kesalahan saat upload.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen pb-8 bg-mainBG relative">
        <SidebarTrigger className="absolute top-9 bg-white md:-left-4 z-30 border-2 border-mainBG" />

        <TitleBanner
          title="Profil Mahasiswa"
          subTitle="Informasi pribadi dan data BESTRO yang dapat dilihat atau diperbarui oleh penerima."
        />

        <section className="px-6 md:px-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
            {/* Profile Image + Info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-36 h-36">
                <Image
                  src={profile?.profile_image || "/profile.jpg"}
                  alt="Profile"
                  width={144}
                  height={144}
                  className="rounded-full object-cover border-4 border-yellow-400"
                />
                <label htmlFor="profileUpload" className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow cursor-pointer">
                  <FiEdit3 className="text-gray-700 w-5 h-5" />
                  <input
                    id="profileUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleUpload}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">Ukuran maksimal 1 MB</p>
              <div className="mt-4 text-center md:text-left">
                <h2 className="text-xl font-bold text-gray-800 uppercase">
                  {profile?.full_name || "Nama Mahasiswa"}
                </h2>
                <p className="text-sm text-gray-600">
                  BSI-230179 / Penerima BESTRO S1 Tahun 2023
                </p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Profile BESTRO */}
            <div className="bg-white rounded-lg shadow p-6">
<<<<<<< HEAD
              <h3 className="text-sm font-semibold text-blue-800 border-b pb-2 mb-4">Profile BESTRO</h3>
=======
              <h3 className="text-sm font-semibold text-black border-b pb-2 mb-4">
                Profile BESTRO
              </h3>
>>>>>>> 5594127 (Adding function to get student Data for side-bar and fixing error at profile page)
              <div className="space-y-4 text-sm text-gray-600">
                <InputField
                  label="Nama Lengkap"
                  value={profile?.full_name || "-"}
                  readOnly
                />
                <InputField
                  label="Jenis Kelamin"
                  value={profile?.gender || "-"}
                  readOnly
                />
                <InputField
                  label="Tempat/Tanggal Lahir"
                  value={profile?.birth_place || "-"}
                  readOnly
                />
                <InputField
                  label="Universitas"
                  value={profile?.university || "-"}
                  readOnly
                />
                <InputField
                  label="Fakultas"
                  value={profile?.faculty || "-"}
                  readOnly
                />
                <InputField
                  label="Program Studi"
                  value={profile?.study_program || "-"}
                  readOnly
                />
              </div>
            </div>

            {/* Informasi Kontak */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
              <div>
<<<<<<< HEAD
                <h3 className="text-sm font-semibold text-blue-800 border-b pb-2 mb-4">Informasi Kontak</h3>
=======
                <h3 className="text-sm font-semibold text-black border-b pb-2 mb-4">
                  Informasi Kontak
                </h3>
>>>>>>> 5594127 (Adding function to get student Data for side-bar and fixing error at profile page)
                <div className="space-y-4 text-sm text-gray-600">
                  <InputField
                    label="Email"
                    value={profile?.email || "-"}
                    readOnly
                  />
                  <InputField
                    label="Nomor Whatsapp"
                    value={profile?.whatsapp || "-"}
                    readOnly
                  />
                  <InputField
                    label="Alamat Tempat Tinggal"
                    value={profile?.address || "-"}
                    readOnly
                  />
                  <InputField
                    label="Kode Pos"
                    value={profile?.postal_code || "-"}
                    readOnly
                  />
                </div>
              </div>
              <div className="mt-6 text-right">
                <Button className="bg-secondary text-white px-4 py-2 rounded-md">
                  Edit Informasi Kontak
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SidebarProvider>
  );
}

interface InputFieldProps {
  label: string;
  value: string;
  readOnly?: boolean;
}

function InputField({ label, value, readOnly }: InputFieldProps) {
  return (
    <div>
      <label className="block text-xs text-gray-500 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        readOnly={readOnly}
        className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 text-sm text-gray-700"
      />
    </div>
  );
}

export default Profile;