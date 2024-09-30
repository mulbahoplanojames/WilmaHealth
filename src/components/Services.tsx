import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { HeartPulse, Activity, Brain, Dna } from "lucide-react";

const ServiceCardData = [
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

const Services = () => {
  return (
    <>
      <section className="md:px-20 px-4 md:py-24 py-14">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 gap-y-10 mt-10">
          {ServiceCardData.map((service) => (
            <Card className="w-full" key={service.id}>
              <CardHeader>
                <service.icon className="w-8 h-8" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl pb-3">{service.title}</CardTitle>
                <CardDescription className="text-md">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
