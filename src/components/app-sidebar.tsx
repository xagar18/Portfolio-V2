
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { User, FileText, Folder, Contact } from "lucide-react";

const items = [
  {
    title: "Main",
    url: "/",
    icon: User,
  },
  {
    title: "Skills",
    url: "/skills",
    icon: FileText,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Folder,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Contact,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-2 py-4 text-xs uppercase tracking-widest opacity-60">Portfolio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-muted/50 rounded-md group transition"
                    >
                      <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-all duration-200" />
                      <span className="font-medium text-lg relative after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:rounded-full after:content-['']">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
