"use client";

import {
  LayoutDashboard,
  Calendar,
  Briefcase,
  Users,
  MapPin,
  UserCircle,
  MessageSquare,
  Puzzle,
  BarChart3,
  Bell,
  Settings,
  UserCog,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { DemoPage } from "./types";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  page: DemoPage | null;
  tourId?: string;
  isBottom?: boolean;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, page: null },
  {
    id: "appointments",
    label: "Appointments",
    icon: Calendar,
    page: "appointments",
    tourId: "tour-flow-appointments",
  },
  { id: "services", label: "Services", icon: Briefcase, page: null },
  {
    id: "staff",
    label: "Staff",
    icon: Users,
    page: "staff",
    tourId: "tour-flow-staff",
  },
  { id: "locations", label: "Locations", icon: MapPin, page: null },
  { id: "customers", label: "Customers", icon: UserCircle, page: null },
  { id: "feedback", label: "Feedback", icon: MessageSquare, page: null },
  { id: "widget", label: "Widget Settings", icon: Puzzle, page: null },
  { id: "analytics", label: "Analytics", icon: BarChart3, page: null },
  { id: "notifications", label: "Notifications", icon: Bell, page: null },
  { id: "settings", label: "Settings", icon: Settings, page: null },
  {
    id: "profile",
    label: "My Profile",
    icon: UserCog,
    page: null,
    isBottom: true,
  },
];

interface DemoSidebarProps {
  page: DemoPage;
  onPageChange: (page: DemoPage) => void;
}

export function DemoSidebar({ page, onPageChange }: DemoSidebarProps) {
  const mainItems = navItems.filter((item) => !item.isBottom);
  const bottomItems = navItems.filter((item) => item.isBottom);

  return (
    <TooltipProvider delayDuration={120}>
      <aside className="flex w-[72px] shrink-0 flex-col border-r border-gray-200 bg-white overflow-hidden z-20">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-gray-200 px-4 justify-start">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 ml-1">
            <span className="text-white font-bold text-lg">S</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {mainItems.map((item) => {
              const isActive =
                (item.page === "staff" && page === "staff") ||
                (item.page === "appointments" && page === "appointments");

              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <button
                      id={item.tourId}
                      className={cn(
                        "flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      )}
                      onClick={() => item.page && onPageChange(item.page)}
                      type="button"
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      <span className="sr-only">{item.label}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    sideOffset={10}
                    className="z-[1401] bg-white"
                  >
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 px-2 py-3">
          {bottomItems.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <button
                  className="flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  type="button"
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span className="sr-only">{item.label}</span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={10} className="z-[1401]">
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </aside>
    </TooltipProvider>
  );
}
