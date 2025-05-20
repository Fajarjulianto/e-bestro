import * as React from "react";
import {
  ChevronsUpDown,
  //  Plus
} from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  // DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    picture: string;
    id: string;
  }[];
}) {
  // const { isMobile } = useSidebar();
  const [activeTeam] = React.useState(teams[0]);
  // console.log("activeTeam", activeTeam);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-transparent text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-full">
                {/* <activeTeam.logo className="size-4" /> */}
                <Image
                  src={activeTeam.picture}
                  height={30}
                  width={30}
                  alt="Profile pinture"
                  className="w-full h-full"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate text-xs text-[#757575]">
                  {activeTeam.id}
                </span>
                <span className="truncate text-md font-bold">
                  {activeTeam.name}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
