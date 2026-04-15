export type DemoPage = "staff" | "appointments";
export type StaffTab = "services" | "working-hours";
export type AppointmentStatus = "pending" | "confirmed" | "completed";

export interface AppointmentItem {
  id: string;
  customer: string;
  service: string;
  staff: string;
  time: string;
  status: AppointmentStatus;
  price: string;
}

export interface MockService {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  duration: number;
  price: string;
}

export interface MockCategory {
  id: string;
  name: string;
  color: string;
}
