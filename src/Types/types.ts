import React from "react";

interface DoctorType {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  image: string;
}

export default DoctorType;

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
