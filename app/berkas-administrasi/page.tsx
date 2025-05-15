import Banner from "@/components/berkas-administrasi/Banner";
import DocumentMenu from "@/components/berkas-administrasi/DocumentMenu";
import PDFviewer from "@/components/berkas-administrasi/PDFviewer";

//Sidebar component
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/utils/app-sidebar";
function BerkasAdministrasi() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-mainBG w-full h-screen relative">
        <SidebarTrigger className="absolute top-9 bg-white md:-left-4 z-30 border-2 border-mainBG" />
        <Banner />
        <div className="grid lg:grid-cols-3 grid-cols-1 py-4">
          <DocumentMenu />
          <div className="lg:col-span-2 col-span-1">
            <PDFviewer />
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default BerkasAdministrasi;
