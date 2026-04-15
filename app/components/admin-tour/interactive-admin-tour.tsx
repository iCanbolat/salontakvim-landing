"use client";

import { useState } from "react";
import { CalendarDays, Users } from "lucide-react";
import { NextStepProvider, NextStepReact, useNextStep } from "nextstepjs";
import { Button } from "@/components/ui/button";

import type {
  AppointmentItem,
  AppointmentStatus,
  DemoPage,
  StaffTab,
} from "./types";
import { initialAppointments } from "./data";
import { tourSteps } from "./tour-steps";
import { DemoSidebar } from "./demo-sidebar";
import { DemoHeader } from "./demo-header";
import { StaffList } from "./staff-list";
import { StaffDetail } from "./staff-detail";
import { ServiceAssignmentDialog } from "./service-assignment-dialog";
import { AppointmentsPage } from "./appointments-page";

function InteractiveTourContent() {
  const { currentStep, currentTour, setCurrentStep, startNextStep } =
    useNextStep();

  /* ---- state ---- */
  const [page, setPage] = useState<DemoPage>("staff");
  const [staffSelected, setStaffSelected] = useState(false);
  const [staffTab, setStaffTab] = useState<StaffTab>("services");
  const [manageServicesOpen, setManageServicesOpen] = useState(false);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    "checkup",
    "emergency",
  ]);
  const [appointments, setAppointments] =
    useState<AppointmentItem[]>(initialAppointments);
  const [activeAppointmentId, setActiveAppointmentId] =
    useState<string>("APP-002");
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [newStatus, setNewStatus] = useState<AppointmentStatus>("confirmed");
  const [detailAppointmentId, setDetailAppointmentId] = useState<string | null>(
    null,
  );

  /* ---- reset helpers ---- */
  const resetStaffFlow = () => {
    setPage("staff");
    setStaffSelected(false);
    setStaffTab("services");
    setManageServicesOpen(false);
  };

  const resetAppointmentsFlow = () => {
    setPage("appointments");
    setStatusDialogOpen(false);
    setDetailAppointmentId(null);
    setActiveAppointmentId("APP-002");
    setAppointments(initialAppointments);
    setNewStatus("confirmed");
  };

  const applyStatusChange = () => {
    setAppointments((prev) =>
      prev.map((item) =>
        item.id === activeAppointmentId ? { ...item, status: newStatus } : item,
      ),
    );
    setStatusDialogOpen(false);
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(serviceId)
        ? prev.filter((item) => item !== serviceId)
        : [...prev, serviceId],
    );
  };

  const handleSelectStaffCard = () => {
    setStaffSelected(true);

    if (currentTour === "staff-flow" && currentStep === 1) {
      setTimeout(() => {
        setCurrentStep(2);
      }, 150);
    }
  };

  const handleOpenManageServices = () => {
    setManageServicesOpen(true);

    if (currentTour === "staff-flow" && currentStep === 2) {
      setTimeout(() => {
        setCurrentStep(3);
      }, 150);
    }
  };

  const isStaffFlowTour = currentTour === "staff-flow";
  const effectivePage: DemoPage = isStaffFlowTour ? "staff" : page;
  const effectiveStaffSelected =
    isStaffFlowTour && currentStep >= 2 ? true : staffSelected;
  const effectiveManageServicesOpen = isStaffFlowTour
    ? currentStep === 3 || (currentStep === 2 && manageServicesOpen)
    : manageServicesOpen;
  const effectiveStaffTab: StaffTab =
    isStaffFlowTour && currentStep >= 4 ? "working-hours" : staffTab;

  return (
    <NextStepReact
      steps={tourSteps}
      overlayZIndex={1300}
      clickThroughOverlay
      noInViewScroll
      onStart={(tourName) => {
        if (tourName === "staff-flow") {
          resetStaffFlow();
          return;
        }
        if (tourName === "appointments-flow") {
          resetAppointmentsFlow();
        }
      }}
      onStepChange={(step, tourName) => {
        if (tourName === "appointments-flow") {
          if (step <= 1) {
            setPage("appointments");
            setStatusDialogOpen(false);
            setDetailAppointmentId(null);
            setActiveAppointmentId("APP-002");
          }
          if (step === 2 || step === 3 || step === 4) {
            setPage("appointments");
            setActiveAppointmentId("APP-002");
            setStatusDialogOpen(step >= 3);
            setDetailAppointmentId(null);
            if (step === 4) {
              setNewStatus("confirmed");
            }
          }
          if (step === 5) {
            setPage("appointments");
            setNewStatus("confirmed");
            setAppointments((prev) =>
              prev.map((item) =>
                item.id === "APP-002" ? { ...item, status: "confirmed" } : item,
              ),
            );
            setStatusDialogOpen(false);
            setDetailAppointmentId(null);
          }
          if (step >= 6) {
            setPage("appointments");
            setStatusDialogOpen(false);
            setDetailAppointmentId("APP-001");
          }
        }
      }}
    >
      <section className="mx-auto w-full max-w-6xl overflow-x-clip px-6 pb-16">
        <div className="rounded-[28px] border border-(--border) bg-(--card) p-6 shadow-sm md:p-8">
          {/* Section header */}
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm uppercase tracking-widest text-(--muted-foreground)">
                Interactive Product Tour
              </p>
              <h3 className="text-3xl font-semibold text-(--foreground)">
                Web App Identical Admin Shell Demo
              </h3>
              <p className="text-sm text-(--muted-foreground) md:text-base">
                The mock now mirrors your real platform shell: left sidebar,
                sticky top header, and realistic page sections for Staff and
                Appointments.
              </p>
            </div>

            <div className="flex w-full flex-wrap gap-3 md:w-auto">
              <Button
                id="tour-launch-staff"
                variant="outline"
                onClick={() => {
                  resetStaffFlow();
                  startNextStep("staff-flow");
                }}
              >
                <Users className="mr-2 h-4 w-4" />
                Start Staff Flow Tour
              </Button>

              <Button
                id="tour-launch-appointments"
                onClick={() => {
                  resetAppointmentsFlow();
                  startNextStep("appointments-flow");
                }}
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                Start Appointments Flow Tour
              </Button>
            </div>
          </div>

          {/* Admin shell container — fixed height, relative for dialog overlay */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex h-[720px]">
              {/* Sidebar */}
              <DemoSidebar page={effectivePage} onPageChange={setPage} />

              {/* Main area */}
              <div className="flex min-w-0 flex-1 flex-col bg-gray-50">
                <DemoHeader
                  page={effectivePage}
                  staffSelected={effectiveStaffSelected}
                />

                <main className="flex-1 overflow-y-auto">
                  <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6">
                    {effectivePage === "staff" ? (
                      <>
                        {!effectiveStaffSelected ? (
                          <StaffList onSelectStaff={handleSelectStaffCard} />
                        ) : (
                          <StaffDetail
                            staffTab={effectiveStaffTab}
                            onStaffTabChange={setStaffTab}
                            onBack={() => setStaffSelected(false)}
                            onManageServicesOpen={handleOpenManageServices}
                          />
                        )}
                      </>
                    ) : (
                      <AppointmentsPage
                        appointments={appointments}
                        activeAppointmentId={activeAppointmentId}
                        statusDialogOpen={statusDialogOpen}
                        newStatus={newStatus}
                        detailAppointmentId={detailAppointmentId}
                        onOpenStatusDialog={(id) => {
                          setActiveAppointmentId(id);
                          setStatusDialogOpen(true);
                        }}
                        onCloseStatusDialog={() => setStatusDialogOpen(false)}
                        onNewStatusChange={setNewStatus}
                        onApplyStatusChange={applyStatusChange}
                        onOpenDetail={setDetailAppointmentId}
                      />
                    )}
                  </div>
                </main>
              </div>
            </div>

            {/* Service Assignment Dialog overlay */}
            <ServiceAssignmentDialog
              open={effectiveManageServicesOpen}
              onClose={() => setManageServicesOpen(false)}
              selectedServiceIds={selectedServiceIds}
              onToggleService={handleServiceToggle}
            />
          </div>
        </div>
      </section>
    </NextStepReact>
  );
}

export function InteractiveAdminTour() {
  return (
    <NextStepProvider>
      <InteractiveTourContent />
    </NextStepProvider>
  );
}
