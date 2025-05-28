"use client";

import * as React from "react";
import "lucide-react";

import { NavMain } from "@/components/utils/nav-main";
import { NavUser } from "@/components/utils/nav-user";
import { TeamSwitcher } from "@/components/utils/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Supabase
import { createClient } from "@/utils/supabase/client";
import { getStudentData } from "@/lib/users";

const profile: { name: string; id: string; picture: string }[] = [
  {
    name: "Belva Chelsea Anggara Hartantyo",
    id: "BS1-230179",
    picture: "/Avatar.png",
  },
];

type LabelData = {
  title: string;
  url?: string;
  icon?: string;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}[];

const labelData: LabelData = [
  {
    title: "Dashboard",
    url: "/",
    icon: "/Home.png",
    isActive: false,
  },
  {
    title: "Profile",
    icon: "/profile-icon.png",
    isActive: true,
    items: [
      {
        title: "Profile",
        url: "/profile",
      },
    ],
  },
  {
    title: "Berkas Administrasi",
    url: "/berkas-administrasi",
    icon: "/document-icon.png",
    isActive: false,
  },
  {
    title: "Kalender Kegiatan",
    url: "/kalender-kegiatan",
    icon: "/calendar-icon.png",
    isActive: false,
  },
  {
    title: "Laporan Hasil Belajar",
    icon: "/student-icon.png",
    isActive: true,
    items: [
      {
        title: "Lapor KHS/Transkrip",
        url: "/laporan?data=transkrip",
      },
      // {
      //   title: "Laporan Pembayaran UKT",
      //   url: "/pembayaran",
      // },
      {
        title: "Laporan Prestasi",
        url: "/prestasi",
      },
      {
        title: "Laporan Pengembangan Diri",
        url: "/perkembangan-diri",
      },
    ],
  },
];

const data = {
  user: {
    name: "Logout Account",
    avatar: "/Log-out.png",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  type Student = { name: string; id: string; picture: string }[];

  const [studentProfile, setStudentProfile] = React.useState<Student>([]);

  React.useEffect(() => {
    async function getStudent(): Promise<void> {
      const supabase = createClient();
      const authData = await supabase.auth.getUser();
      const user_id: string = authData.data.user?.id as string;
      const data = await getStudentData(user_id);

      if (!data) {
        setStudentProfile([
          {
            name: "Server Error",
            id: " Server Error",
            picture: "/Error.png",
          },
        ]);
      }
      console.log(data);

      setStudentProfile(data as Student);
    }

    getStudent();
  }, []);

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="font-poppins border-none bg-primary"
    >
      <SidebarHeader>
        <TeamSwitcher teams={profile} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={labelData} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
