import type { AppointmentItem, MockCategory, MockService } from "./types";

export const initialAppointments: AppointmentItem[] = [
  {
    id: "APP-001",
    customer: "Jane Smith",
    service: "Dental Check-up",
    staff: "Dr. Emma Smith",
    time: "09:30",
    status: "completed",
    price: "£95",
  },
  {
    id: "APP-002",
    customer: "Michael Ross",
    service: "Emergency Appointment",
    staff: "Dr. Emma Smith",
    time: "11:00",
    status: "pending",
    price: "£120",
  },
  {
    id: "APP-003",
    customer: "Emily White",
    service: "Invisalign Consultation",
    staff: "Dr. James Wilson",
    time: "14:15",
    status: "confirmed",
    price: "£50",
  },
];

export const mockServices: MockService[] = [
  {
    id: "checkup",
    name: "Dental Check-up",
    description: "Routine examination and cleaning",
    categoryId: "checks",
    duration: 45,
    price: "£95",
  },
  {
    id: "consultation",
    name: "Initial Consultation",
    description: "New patient assessment",
    categoryId: "checks",
    duration: 30,
    price: "£120",
  },
  {
    id: "emergency",
    name: "Emergency Appointment",
    description: "Urgent dental care",
    categoryId: "emergency",
    duration: 60,
    price: "£150",
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    description: "Professional bleaching treatment",
    categoryId: "cosmetic",
    duration: 90,
    price: "£350",
  },
  {
    id: "invisalign",
    name: "Invisalign Consult",
    description: "Clear aligner consultation",
    categoryId: "ortho",
    duration: 45,
    price: "£50",
  },
];

export const mockCategories: MockCategory[] = [
  { id: "checks", name: "Check-ups & Consultation", color: "#2563EB" },
  { id: "emergency", name: "Emergency", color: "#EF4444" },
  { id: "cosmetic", name: "Cosmetic Treatments", color: "#8B5CF6" },
  { id: "ortho", name: "Orthodontics", color: "#F59E0B" },
];
