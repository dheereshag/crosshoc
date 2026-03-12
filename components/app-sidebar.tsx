"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, LifeBuoyIcon, SendIcon, FrameIcon, PieChartIcon, MapIcon, TerminalIcon } from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
  {
    title: "New Releases",
    url: "#",
    icon: <TerminalSquareIcon />,
    isActive: true,
    items: [
      { title: "Last 30 days", url: "#" },
      { title: "This week", url: "#" },
      { title: "Next week", url: "#" },
      { title: "Release calendar", url: "#" },
    ],
  },
  {
    title: "Top",
    url: "#",
    icon: <PieChartIcon />,
    items: [
      { title: "Best of the year", url: "#" },
      { title: "Popular in 2025", url: "#" },
      { title: "All time top 250", url: "#" },
    ],
  },
  {
    title: "Browse",
    url: "#",
    icon: <MapIcon />,
    items: [
      { title: "Platforms", url: "#" },
      { title: "Stores", url: "#" },
      { title: "Collections", url: "#" },
    ],
  },
  {
    title: "Genres",
    url: "#",
    icon: <BotIcon />,
    items: [
      { title: "Action", url: "#" },
      { title: "Strategy", url: "#" },
      { title: "RPG", url: "#" },
      { title: "Shooter", url: "#" },
      { title: "Adventure", url: "#" },
      { title: "Puzzle", url: "#" },
      { title: "Racing", url: "#" },
      { title: "Sports", url: "#" },
    ],
  },
],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: (
        <LifeBuoyIcon
        />
      ),
    },
    {
      title: "Feedback",
      url: "#",
      icon: (
        <SendIcon
        />
      ),
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: (
        <FrameIcon
        />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: (
        <PieChartIcon
        />
      ),
    },
    {
      name: "Travel",
      url: "#",
      icon: (
        <MapIcon
        />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <TerminalIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">RAWG games</span>
                <span className="truncate text-xs">Discovery</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
       <NavMain items={data.navMain} />
       <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
