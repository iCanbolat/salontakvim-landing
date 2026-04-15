"use client";

import { Bell, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { DemoPage } from "./types";

interface DemoHeaderProps {
  page: DemoPage;
  staffSelected: boolean;
}

export function DemoHeader({ page, staffSelected }: DemoHeaderProps) {
  const pageLabel = page === "staff" ? "Staff" : "Appointments";

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
      {/* Breadcrumbs — matches client Breadcrumbs.tsx */}
      <nav
        className="flex items-center space-x-2 text-sm"
        aria-label="Breadcrumb"
      >
        <span className="text-gray-500 hover:text-gray-700 transition-colors">
          <Home className="h-4 w-4" />
        </span>
        <ChevronRight className="h-4 w-4 text-gray-400 shrink-0" />
        {staffSelected && page === "staff" ? (
          <>
            <span className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer truncate max-w-[150px]">
              Staff
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400 shrink-0" />
            <span className="font-medium text-gray-900 truncate max-w-[200px]">
              Dr. Emma Smith
            </span>
          </>
        ) : (
          <span className="font-medium text-gray-900 truncate max-w-[200px]">
            {pageLabel}
          </span>
        )}
      </nav>

      {/* Right Side Actions — matches client Header.tsx */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
            3
          </span>
        </Button>

        {/* User Avatar — matches client UserMenu.tsx trigger */}
        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-blue-600 text-white font-medium">
              ES
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
}
