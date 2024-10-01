import DoctorType, { ServiceType } from "@/Types/types";

export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Appointment",
    path: "/appointment",
  },
  {
    title: "Doctors",
    path: "/doctors",
  },
];

const doctors: DoctorType[] = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Cardiology",
    experience: 15,
    image:
      "https://i.pinimg.com/564x/95/5d/a2/955da23d030de4bb2311f0e45c8076d2.jpg",
  },
  {
    id: 2,
    name: "Dr. John Doe",
    specialty: "Pediatrics",
    experience: 10,
    image:
      "https://i.pinimg.com/736x/10/7b/d3/107bd31bea61d2a0cb003ebf54abe9c6.jpg",
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    specialty: "Neurology",
    experience: 12,
    image:
      "https://i.pinimg.com/236x/79/e4/2b/79e42bd0e3ced9e24879cbf328c3eba2.jpg",
  },
  {
    id: 4,
    name: "Dr. Michael Johnson",
    specialty: "Orthopedics",
    experience: 20,
    image:
      "https://i.pinimg.com/236x/d9/da/ba/d9dabab394dac93df19bd03577f83f41.jpg",
  },
];

export default doctors;

//==============================================================================================
// Services Data

import { HeartPulse, Activity, Brain, Dna } from "lucide-react";

export const ServiceCardData: ServiceType[] = [
  {
    id: 1,
    title: "Specialist Consultations",
    description:
      "Our primary care team offers a range of specialized care options to help you live your best life. We offer a variety of services, including:",
    icon: HeartPulse,
  },
  {
    id: 2,
    title: "Preventive Health Screenings",
    description:
      "Our primary care team offers a range of specialized care options to help you live your best life. We offer a variety of services, including:",
    icon: Activity,
  },
  {
    id: 3,
    title: "Telemedicine",
    description:
      "Our primary care team offers a range of specialized care options to help you live your best life. We offer a variety of services, including:",
    icon: Brain,
  },
  {
    id: 4,
    title: "Specialist Consultations",
    description:
      "Our primary care team offers a range of specialized care options to help you live your best life. We offer a variety of services, including:",
    icon: Dna,
  },
];
