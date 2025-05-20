import React, { JSX } from "react";

//Components
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
function LaporanTranskrip(): JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full pb-4 bg-grey relative">
        <SidebarTrigger className="absolute top-9 bg-white md:-left-4 z-30 border-2 border-mainBG" />
        <div>
          <TitleBanner
            title="Pelaporan Hasil Belajar"
            subTitle={`Penerima Beasiswa BESTRO wajib melaporkan perkembangan\nhasil belajar secara berkala setiap semester`}
          />
          <div className="pl-6">
            <Navigation />
            <FormSectionTitle title="Entry Laporan Hasil Belajar" />
            <FormProgressBar progress={0.5} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mr-3">
              <FormSelect
                label="Semester"
                options={["1", "2", "3", "4", "5", "6", "7", "8"]}
                required
              />
              <FormInput
                label="Tanggal Bayar UKT"
                placeholder="Tanggal Bayar UKT"
                type="date"
                required
              />
              <FormInput
                label="Indeks Prestasi Semester"
                placeholder="Nilai Indeks Prestasi Semester"
                required
              />

              <FormInput
                label="Indeks Prestasi Kumulatif"
                placeholder="Nilai Indeks Prestasi Kumulatif"
                required
              />
              <UploadBox label="Upload Transkrip Nilai" />
              <UploadBox label="Upload bukti bayar UKT" />
              <div></div>
              <div className="flex gap-4 h-10 -ml-34">
                <Button className="bg-white px-10 py-2 !text-secondary border border-secondary">
                  Batal
                </Button>
                <Button className="bg-secondary py-2">Selanjutnya</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
export default LaporanTranskrip;
