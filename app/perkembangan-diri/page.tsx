"use client";

import React, { JSX } from "react";
import TitleBanner from "@/components/utils/TitleBanner";
import Navigation from "@/components/laporan/Navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import FormProgressBar from "@/components/ui/FormProgressBar";
import FormSectionTitle from "@/components/ui/FormSectionTitle";
import Button from "@/components/Button";
import { AppSidebar } from "@/components/utils/app-sidebar";
import RichTextarea from "@/components/laporan/RichTextArea";

function PerkembanganDiri(): JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full pb-4 bg-mainBG relative">
        <SidebarTrigger className="absolute top-9 bg-white md:-left-4 z-30 border-2 border-mainBG" />
        <div>
          <TitleBanner
            title="Entry Pelaporan Perkembangan Diri"
            subTitle="Isilah refleksi diri dan target pengembangan ke depan secara jelas dan jujur."
          />

          <div className="pl-6 pr-6">
            <Navigation />
            <FormSectionTitle title="Entry Pelaporan Perkembangan Diri" />
            <FormProgressBar progress={1} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <Button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded mb-4">
                  Evaluasi & Refleksi Diri
                </Button>
                <RichTextarea label="Refleksi Diri atas Progres Akademik" placeholder="Jelaskan apakah perkembangan akademik sesuai target..." />
                <RichTextarea label="Refleksi Diri atas Pengembangan Non-Akademik" placeholder="Ceritakan kegiatan di luar akademik..." />
                <RichTextarea label="Tantangan yang Dihadapi" placeholder="Sebutkan tantangan utama..." />
                <RichTextarea label="Cara Mengatasi Tantangan" placeholder="Bagaimana mengatasi tantangan tadi..." />
              </div>
              <div>
                <Button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded mb-4">
                  Target dan Rencana Kedepan
                </Button>
                <RichTextarea label="Target Akademik untuk Semester Depan" placeholder="Tulis target IPK berikutnya..." />
                <RichTextarea label="Target Non-Akademik untuk Semester Depan" placeholder="Tulis target kontribusi sosial atau pengembangan diri..." />
                <RichTextarea label="Strategi Pencapaian Target" placeholder="Tulis langkah nyata untuk mencapai target..." />
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <Button className="bg-gray-700 text-white px-6 py-2 rounded mr-4">
                Simpan
              </Button>
              <Button className="border border-secondary text-secondary px-6 py-2 rounded mr-4">
                Kembali
              </Button>
              <Button className="bg-secondary text-white px-6 py-2 rounded">
                Finalisasi
              </Button>
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default PerkembanganDiri;
