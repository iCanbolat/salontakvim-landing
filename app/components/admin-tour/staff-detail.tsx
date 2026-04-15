"use client";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Layers,
  Mail,
  MapPin,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { StaffTab } from "./types";

interface StaffDetailProps {
  staffTab: StaffTab;
  onStaffTabChange: (tab: StaffTab) => void;
  onBack: () => void;
  onManageServicesOpen: () => void;
}

export function StaffDetail({
  staffTab,
  onStaffTabChange,
  onBack,
  onManageServicesOpen,
}: StaffDetailProps) {
  return (
    <div id="tour-staff-detail" className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Staff
        </Button>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Profile Sidebar — matches StaffDetails.tsx */}
        <div className="w-full space-y-6 md:w-80">
          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-blue-100 text-2xl font-bold text-blue-700">
                    ES
                  </AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-xl font-bold">Dr. Emma Smith</h2>
                <p className="text-sm text-muted-foreground">General Dentist</p>
                <div className="mt-3 flex gap-2">
                  <Badge>Visible</Badge>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">emma@smith-dental.co.uk</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Harley Street, London</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span>Staff since 4/1/2024</span>
                </div>
              </div>
              <Button className="mt-6 w-full" variant="outline">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content with Tabs — matches StaffDetails.tsx */}
        <div className="flex-1 space-y-6">
          <Tabs
            value={staffTab}
            onValueChange={(v) => onStaffTabChange(v as StaffTab)}
            className="w-full"
          >
            <TabsList>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger id="tour-working-hours-tab" value="working-hours">
                Working Hours
              </TabsTrigger>
              <TabsTrigger value="timeoff">Time Off</TabsTrigger>
            </TabsList>

            {/* Services Tab */}
            <TabsContent value="services" className="mt-6 space-y-4">
              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Assigned Services</CardTitle>
                    <CardDescription>
                      Services this staff member can perform
                    </CardDescription>
                  </div>
                  <Button
                    id="tour-manage-services-button"
                    size="sm"
                    className="bg-[#72e3ad] cursor-pointer"
                    onClick={onManageServicesOpen}
                  >
                    Manage Services
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Check-ups & Consultation */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                          <Layers className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            Check-ups &amp; Consultation
                          </p>
                          <p className="text-xs text-gray-500">2 services</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Card className="min-w-[280px] flex-1">
                          <CardContent className="space-y-3 p-4">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-medium text-gray-900">
                                  Dental Check-up
                                </p>
                                <p className="text-sm text-gray-600">
                                  Routine examination and cleaning
                                </p>
                              </div>
                              <Badge variant="secondary">£95</Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">45 min</Badge>
                              <Badge variant="outline">Capacity: 1</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="min-w-[280px] flex-1">
                          <CardContent className="space-y-3 p-4">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-medium text-gray-900">
                                  Initial Consultation
                                </p>
                              </div>
                              <Badge variant="secondary">£120</Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">30 min</Badge>
                              <Badge variant="outline">Capacity: 1</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    {/* Emergency */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                          <Layers className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            Emergency
                          </p>
                          <p className="text-xs text-gray-500">1 service</p>
                        </div>
                      </div>
                      <Card className="max-w-sm">
                        <CardContent className="space-y-3 p-4">
                          <div className="flex items-start justify-between gap-3">
                            <p className="font-medium text-gray-900">
                              Emergency Appointment
                            </p>
                            <Badge variant="secondary">£150</Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">60 min</Badge>
                            <Badge variant="outline">Capacity: 1</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Working Hours Tab */}
            <TabsContent value="working-hours" className="mt-6 space-y-4">
              <Card id="tour-working-hours-content">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Working Hours</CardTitle>
                    <CardDescription>Default weekly schedule</CardDescription>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit Hours
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(232px,1fr))]">
                    {[
                      { d: "Monday", h: "09:00 - 17:30", active: true },
                      { d: "Tuesday", h: "09:00 - 17:30", active: true },
                      { d: "Wednesday", h: "09:00 - 17:30", active: true },
                      { d: "Thursday", h: "09:00 - 17:30", active: true },
                      { d: "Friday", h: "09:00 - 17:30", active: true },
                      { d: "Saturday", h: "10:00 - 14:00", active: true },
                      { d: "Sunday", h: "Closed", active: false },
                    ].map((day) => (
                      <div
                        key={day.d}
                        className="flex flex-wrap items-center justify-between gap-2 rounded-lg border p-3"
                      >
                        <span className="text-sm font-medium capitalize">
                          {day.d}
                        </span>
                        {day.active ? (
                          <Badge
                            variant="outline"
                            className="font-mono text-[12px]"
                          >
                            {day.h}
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="text-[12px]">
                            Closed
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Time Off Tab */}
            <TabsContent value="timeoff" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Time Off</CardTitle>
                    <CardDescription>
                      Approved and pending leave
                    </CardDescription>
                  </div>
                  <Button size="sm" variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Time Off
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3 rounded-lg border bg-white p-4 shadow-sm">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-900">
                        Dr. Emma Smith
                      </span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-800 border-green-200"
                      >
                        Approved
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarDays className="h-4 w-4 shrink-0" />
                      <span>15 April 2026 – 18 April 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock3 className="h-4 w-4 shrink-0" />
                      <span>All day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
