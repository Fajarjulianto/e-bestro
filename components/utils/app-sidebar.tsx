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
import { getStudentProfile } from "@/lib/users";

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
    url: "/dashboard",
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
  type Student = {
    name: string;
    studentID: string;
    profilePicture: string;
  }[];
  const [studentProfile, setStudentProfile] = React.useState<Student>([
    {
      name: "Loading...",
      studentID: "Loading...",
      profilePicture: "/Avatar.png",
    },
  ]);

  React.useEffect(() => {
    async function getStudent(): Promise<void> {
      const supabase = createClient();
      const authData = await supabase.auth.getUser();
      const user_id: string = authData.data.user?.id as string;
      const data = await getStudentProfile(user_id);

      if (!data) {
        setStudentProfile([
          {
            name: "Data Not Found",
            studentID: "Data Not Found",
            profilePicture: "/Avatar.png",
          },
        ]);
        console.log("error 1");
        return;
      }

      const { name, profilePicture, studentID } = data[0];

      setStudentProfile([{ name, studentID, profilePicture }] as Student);
    }

    getStudent();
  }, []);
  console.log(studentProfile);
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="font-poppins border-none bg-primary"
    >
      <SidebarHeader>
        <TeamSwitcher teams={studentProfile} />
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
