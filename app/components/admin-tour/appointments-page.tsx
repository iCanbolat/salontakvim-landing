"use client";

import { CalendarDays, Clock3, Ellipsis, Plus } from "lucide-react";
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
import type { AppointmentItem, AppointmentStatus } from "./types";

function statusBadgeClass(status: AppointmentStatus) {
  if (status === "completed")
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (status === "confirmed") return "bg-blue-50 text-blue-700 border-blue-200";
  return "bg-amber-50 text-amber-700 border-amber-200";
}

interface AppointmentsPageProps {
  appointments: AppointmentItem[];
  activeAppointmentId: string;
  statusDialogOpen: boolean;
  newStatus: AppointmentStatus;
  detailAppointmentId: string | null;
  onOpenStatusDialog: (id: string) => void;
  onCloseStatusDialog: () => void;
  onNewStatusChange: (status: AppointmentStatus) => void;
  onApplyStatusChange: () => void;
  onOpenDetail: (id: string) => void;
}

export function AppointmentsPage({
  appointments,
  activeAppointmentId,
  statusDialogOpen,
  newStatus,
  detailAppointmentId,
  onOpenStatusDialog,
  onCloseStatusDialog,
  onNewStatusChange,
  onApplyStatusChange,
  onOpenDetail,
}: AppointmentsPageProps) {
  const activeAppointment = appointments.find(
    (a) => a.id === activeAppointmentId,
  );
  const detailAppointment =
    appointments.find((a) => a.id === detailAppointmentId) ?? appointments[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-3xl font-bold text-gray-900">Appointments</h4>
          <p className="mt-1 text-sm text-gray-600">
            Manage customer appointments and bookings
          </p>
        </div>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div id="tour-appointments-list" className="space-y-3">
            {appointments.map((item) => {
              const isCompleted = item.status === "completed";
              const isStatusTarget = item.id === "APP-002";

              return (
                <Card
                  id={
                    item.id === "APP-001"
                      ? "tour-completed-appointment"
                      : item.id === "APP-002"
                        ? "tour-updated-appointment"
                        : undefined
                  }
                  key={item.id}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.customer}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.service} • {item.staff}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={statusBadgeClass(item.status)}
                        >
                          {item.status}
                        </Badge>
                        {isStatusTarget && (
                          <Button
                            id="tour-appointment-menu-button"
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => onOpenStatusDialog(item.id)}
                          >
                            <Ellipsis className="h-4 w-4" />
                          </Button>
                        )}
                        {isCompleted && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onOpenDetail(item.id)}
                          >
                            Open detail
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5" />
                        {item.time}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        Today
                      </span>
                      <span>{item.price}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Status Change Dialog */}
          {statusDialogOpen && activeAppointment && (
            <Card id="tour-status-dialog" className="mt-3">
              <CardHeader>
                <CardTitle>Change Status</CardTitle>
                <CardDescription>
                  Appointment {activeAppointment.id} •{" "}
                  {activeAppointment.customer}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div id="tour-status-options" className="flex flex-wrap gap-2">
                  {(["pending", "confirmed", "completed"] as const).map(
                    (status) => (
                      <Button
                        key={status}
                        size="sm"
                        variant={newStatus === status ? "default" : "outline"}
                        className="capitalize"
                        onClick={() => onNewStatusChange(status)}
                      >
                        {status}
                      </Button>
                    ),
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onCloseStatusDialog}
                  >
                    Cancel
                  </Button>
                  <Button size="sm" onClick={onApplyStatusChange}>
                    Save Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Appointment Detail */}
          {detailAppointmentId && detailAppointment && (
            <Card id="tour-appointment-detail" className="mt-3">
              <CardHeader>
                <CardTitle>Completed Appointment Detail</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 text-sm text-gray-600 md:grid-cols-2">
                  <p>
                    <span className="font-medium text-gray-900">Customer:</span>{" "}
                    {detailAppointment.customer}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Staff:</span>{" "}
                    {detailAppointment.staff}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Service:</span>{" "}
                    {detailAppointment.service}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Payment:</span>{" "}
                    {detailAppointment.price} (card)
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="pending" />
        <TabsContent value="confirmed" />
        <TabsContent value="completed" />
      </Tabs>
    </div>
  );
}
