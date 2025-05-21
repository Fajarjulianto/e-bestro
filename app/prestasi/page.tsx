"use client";

import React, { JSX }  from "react";
import TitleBanner from "@/components/utils/TitleBanner";
import Navigation from "@/components/laporan/Navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import FormProgressBar from "@/components/ui/FormProgressBar";
import FormSectionTitle from "@/components/ui/FormSectionTitle";
import UploadBox from "@/components/ui/UploadBox";
import { FormSelect } from "@/components/ui/FormSelect";
import { FormInput } from "@/components/ui/FormInput";
import Button from "@/components/Button";
import { AppSidebar } from "@/components/utils/app-sidebar";

function UnggahPrestasi(): JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full pb-4 bg-mainBG relative">
        <SidebarTrigger className="absolute top-9 bg-white md:-left-4 z-30 border-2 border-mainBG" />
        <div>
          <TitleBanner
            title="Entry Prestasi / Penghargaan"
            subTitle="Unggah bukti prestasi atau penghargaan yang pernah diperoleh."
          />

          <div className="pl-6 pr-6">
            <Navigation />
            <FormSectionTitle title="Entry Prestasi / Penghargaan" />
            <FormProgressBar progress={0.66} />

            <div className="flex justify-start mt-4">
              <Button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
                + Tambah Data
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <FormInput
                label="Nama Prestasi / Penghargaan"
                placeholder="Detail Nama Prestasi atau Penghargaan"
                required
              />
              <FormInput
                label="Tahun Perolehan"
                placeholder="Tahun Perolehan"
                required
              />
              <FormInput
                label="Penyelenggara"
                placeholder="Penyelenggara Kompetisi atau Pemberi Penghargaan"
                required
              />
              <UploadBox label="Upload Bukti Prestasi / Penghargaan" />
              <FormSelect
                label="Tingkat Prestasi / Penghargaan"
                options={["Lokal", "Nasional", "Internasional"]}
                required
              />
              <div className="flex items-end">
                <Button className="bg-gray-700 text-white px-6 py-2 rounded">
                  Simpan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default UnggahPrestasi;