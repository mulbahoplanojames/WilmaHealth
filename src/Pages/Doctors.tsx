import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import doctors from "@/Data/Data";
import Swal from "sweetalert2";

const DoctorDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleBookingAlert = (doctor: string) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Booking appointment with ${doctor}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 mt-28 mb-20">
      <h1 className="text-4xl font-bold mb-8">Our Doctors</h1>

      <div className="mb-10">
        <Label htmlFor="search" className="pb-3 inline-block">
          Search Doctors
        </Label>
        <Input
          id="search"
          type="text"
          placeholder="Search by name or specialty"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardHeader>
              <CardTitle>{doctor.name}</CardTitle>
              <CardDescription>{doctor.specialty}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover mb-2"
              />
              <p>{doctor.experience} years of experience</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleBookingAlert(doctor.name)}>
                Book Appointment
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoctorDirectory;
