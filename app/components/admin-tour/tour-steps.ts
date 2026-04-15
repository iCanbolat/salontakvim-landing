import type { Tour } from "nextstepjs";

export const tourSteps: Tour[] = [
  {
    tour: "staff-flow",
    steps: [
      {
        icon: "1",
        title: "Staff Page",
        content:
          "Start from the Staff module. We guide the complete management flow in one walkthrough.",
        selector: "#tour-flow-staff",
        side: "right",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "2",
        title: "Open Staff Profile",
        content: "Click a team member card to continue and open Staff Detail.",
        selector: "#tour-staff-card",
        side: "right",
        showControls: false,
        showSkip: true,
        blockKeyboardControl: true,
      },
      {
        icon: "3",
        title: "Manage Services",
        content:
          "Click Manage Services to continue and open the assignment dialog.",
        selector: "#tour-manage-services-button",
        side: "bottom",
        showControls: false,
        showSkip: true,
        blockKeyboardControl: true,
      },
      {
        icon: "4",
        title: "Service Selection Modal",
        content:
          "Selectable services can be toggled in one place, then saved into staff availability.",
        selector: "#tour-services-modal",
        side: "left",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "5",
        title: "Switch to Working Hours",
        content:
          "Move to Working Hours to control weekly shifts and operational capacity windows.",
        selector: "#tour-working-hours-tab",
        side: "bottom",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "6",
        title: "Working Hours Content",
        content:
          "The schedule table is optimized for quick edits and immediate planning decisions.",
        selector: "#tour-working-hours-content",
        side: "top",
        showControls: true,
        showSkip: true,
      },
    ],
  },
  {
    tour: "appointments-flow",
    steps: [
      {
        icon: "1",
        title: "Appointments Page",
        content:
          "Switch to Appointments to monitor the live queue and booking states.",
        selector: "#tour-flow-appointments",
        side: "bottom",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "2",
        title: "Appointment List",
        content:
          "All booking items are visible with service, owner, and timeline context.",
        selector: "#tour-appointments-list",
        side: "right",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "3",
        title: "Three-dot Menu",
        content:
          "Use the three-dot action on a pending item to open Change Status dialog.",
        selector: "#tour-appointment-menu-button",
        side: "left",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "4",
        title: "Change Status Dialog",
        content:
          "The dialog centralizes status updates and internal control before processing.",
        selector: "#tour-status-dialog",
        side: "left",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "5",
        title: "Set New Status",
        content:
          "Select the new booking status, then confirm to apply the operational change.",
        selector: "#tour-status-options",
        side: "right",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "6",
        title: "Updated Record",
        content:
          "The status is updated in the list so teams can instantly react.",
        selector: "#tour-updated-appointment",
        side: "bottom",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "7",
        title: "Completed Appointment",
        content:
          "Open a completed appointment to show final details, notes, and settlement summary.",
        selector: "#tour-completed-appointment",
        side: "right",
        showControls: true,
        showSkip: true,
      },
      {
        icon: "8",
        title: "Appointment Detail View",
        content:
          "Detail view demonstrates how staff, customer, payments, and timeline are unified.",
        selector: "#tour-appointment-detail",
        side: "left",
        showControls: true,
        showSkip: true,
      },
    ],
  },
];
