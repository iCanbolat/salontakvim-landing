"use client";

import { CalendarDays, Check, Mail, Plus, X } from "lucide-react";
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

interface StaffListProps {
  onSelectStaff: () => void;
}

export function StaffList({ onSelectStaff }: StaffListProps) {
  return (
    <div id="tour-staff-list" className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-3xl font-bold text-gray-900">Staff</h4>
          <p className="mt-1 text-sm text-gray-600">
            Manage your team members and invitations
          </p>
        </div>
        <Button size="sm" className="bg-[#72e3ad] cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          Invite Staff
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="staff" className="space-y-4">
        <TabsList className="m-auto sm:m-0">
          <TabsTrigger value="staff">Staff Members (4)</TabsTrigger>
          <TabsTrigger value="invitations">Invitations (1)</TabsTrigger>
          <TabsTrigger value="timeoffs">Time Off (2)</TabsTrigger>
        </TabsList>

        {/* Staff Members Tab */}
        <TabsContent value="staff" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            <Card
              id="tour-staff-card"
              className="cursor-pointer transition hover:border-blue-300"
              onClick={onSelectStaff}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                        ES
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Dr. Emma Smith
                      </p>
                      <p className="text-sm text-gray-500">General Dentist</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    admin
                  </Badge>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <Mail className="h-3.5 w-3.5" />
                  <span className="truncate">emma@smith-dental.co.uk</span>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer transition hover:border-blue-300">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-purple-100 text-purple-700 font-semibold">
                        JW
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Dr. James Wilson
                      </p>
                      <p className="text-sm text-gray-500">Orthodontist</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    staff
                  </Badge>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <Mail className="h-3.5 w-3.5" />
                  <span className="truncate">james@smith-dental.co.uk</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Invitations Tab */}
        <TabsContent value="invitations">
          <Card>
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>
                Invitations waiting to be accepted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">
                    sarah@smith-dental.co.uk
                  </p>
                  <p className="text-sm text-gray-500">Sent 3 days ago</p>
                </div>
                <Badge
                  variant="outline"
                  className="bg-amber-50 text-amber-700 border-amber-200"
                >
                  Pending
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Time Off Tab */}
        <TabsContent value="timeoffs">
          <Card>
            <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>Time Off Requests</CardTitle>
                <CardDescription>
                  Review, approve, or decline staff time off
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Pending", "Approved", "Declined", "All"].map((f) => (
                  <Button
                    key={f}
                    size="sm"
                    variant="ghost"
                    className="min-w-[80px] rounded-2xl border border-gray-200"
                  >
                    {f}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-900">
                    Dr. James Wilson
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-yellow-50 text-yellow-800 border-yellow-200"
                  >
                    Pending
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CalendarDays className="h-4 w-4 shrink-0" />
                  <span>20 April 2026</span>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-xs text-gray-500">Requested 2 days ago</p>
                  <div className="flex gap-2">
                    <Button size="sm">
                      <Check className="mr-1 h-4 w-4" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline">
                      <X className="mr-1 h-4 w-4" />
                      Decline
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
