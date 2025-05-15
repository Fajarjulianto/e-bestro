import React, { JSX } from "react";

//Components
import TitleBanner from "@/components/utils/TitleBanner";
import Navigation from "@/components/laporan/Navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/utils/app-sidebar";
function LaporanTranskrip(): JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full pb-4 bg-mainBG relative">
        <SidebarTrigger className="absolute top-9 bg-white md:-left-4 z-30 border-2 border-mainBG" />
        <div>
          <TitleBanner
            title="Berkas Administrasi"
            subTitle="Dokumen administrasi data pribadi penerima BESTRO"
          />
          <div className="pl-6">
            <Navigation />
            <div className="bg-white rounded-xl w-full">Hello</div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
export default LaporanTranskrip;
