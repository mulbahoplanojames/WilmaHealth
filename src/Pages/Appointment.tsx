import React, { useState, useEffect } from "react";
import { Send, Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import doctors from "@/Data/Data";
import AppointmentHero from "@/components/AppointmentHero";

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  time: string;
  doctorId: number;
  reminderSent: boolean;
}

const HealthcareAppointmentScheduler: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [newAppointment, setNewAppointment] = useState<
    Omit<Appointment, "id" | "reminderSent">
  >({
    patientName: "",
    date: "",
    time: "",
    doctorId: 0,
  });
  const [editingAppointment, setEditingAppointment] =
    useState<Appointment | null>(null);

  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  const saveAppointmentsToLocalStorage = (appointments: Appointment[]) => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isEditing: boolean = false
  ) => {
    const { name, value } = e.target;
    if (isEditing && editingAppointment) {
      setEditingAppointment({ ...editingAppointment, [name]: value });
    } else {
      setNewAppointment((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDoctorChange = (value: string, isEditing: boolean = false) => {
    if (isEditing && editingAppointment) {
      setEditingAppointment({ ...editingAppointment, doctorId: Number(value) });
    } else {
      setNewAppointment((prev) => ({ ...prev, doctorId: Number(value) }));
    }
  };

  const handleAddAppointment = () => {
    if (!newAppointment.doctorId) {
      alert("Please select a doctor");
      return;
    }
    const appointment: Appointment = {
      ...newAppointment,
      id: Date.now(),
      reminderSent: false,
    };
    const updatedAppointments = [...appointments, appointment];
    setAppointments(updatedAppointments);
    saveAppointmentsToLocalStorage(updatedAppointments);
    setNewAppointment({ patientName: "", date: "", time: "", doctorId: 0 });
  };

  const handleUpdateAppointment = () => {
    if (!editingAppointment) return;
    const updatedAppointments = appointments.map((app) =>
      app.id === editingAppointment.id ? editingAppointment : app
    );
    setAppointments(updatedAppointments);
    saveAppointmentsToLocalStorage(updatedAppointments);
    setEditingAppointment(null);
  };

  const handleSendReminder = (id: number) => {
    const updatedAppointments = appointments.map((app) =>
      app.id === id ? { ...app, reminderSent: true } : app
    );
    setAppointments(updatedAppointments);
    saveAppointmentsToLocalStorage(updatedAppointments);
  };

  const handleDeleteAppointment = (id: number) => {
    const updatedAppointments = appointments.filter((app) => app.id !== id);
    setAppointments(updatedAppointments);
    saveAppointmentsToLocalStorage(updatedAppointments);
  };

  const getDoctorName = (doctorId: number) => {
    const doctor = doctors.find((d) => d.id === doctorId);
    return doctor ? doctor.name : "Unknown Doctor";
  };

  return (
    <section className="container mx-auto p-4 mt-3">
      <AppointmentHero />
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>

      <div className="mb-4 md:mb-8 md:p-8 p-4 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div>
            <Label htmlFor="patientName">Your Name</Label>
            <Input
              id="patientName"
              name="patientName"
              value={newAppointment.patientName}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="dark:border-white"
            />
          </div>
          <div>
            <Label htmlFor="date">Preferred Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={newAppointment.date}
              onChange={handleInputChange}
              className="dark:border-white"
            />
          </div>
          <div>
            <Label htmlFor="time">Preferred Time</Label>
            <Input
              id="time"
              list="time-options"
              name="time"
              type="time"
              value={newAppointment.time}
              onChange={handleInputChange}
              className="dark:border-white"
            />
            <datalist id="time-options">
              <option value="07:00" />
              <option value="11:00" />
              <option value="2:00" />
              <option value="4:00" />
            </datalist>
          </div>
          <div>
            <Label htmlFor="doctor">Select Doctor</Label>
            <Select onValueChange={handleDoctorChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a doctor" />
              </SelectTrigger>
              <SelectContent>
                {doctors.map((doctor) => (
                  <SelectItem
                    key={doctor.id}
                    value={doctor.id.toString()}
                    className="dark:border-white"
                  >
                    {doctor.name} - {doctor.specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="mt-4" onClick={handleAddAppointment}>
          Book Appointment
        </Button>
      </div>

      <div className="mb-4 md:mb-8 md:p-8 p-4 rounded shadow">
        <h2 className="text-xl font-semibold p-4">Your Appointments</h2>
        {appointments.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="dark:bg-gray-700 bg-gray-200">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Time</th>
                <th className="p-2 text-left">Doctor</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-t">
                  <td className="p-2">{appointment.patientName}</td>
                  <td className="p-2">{appointment.date}</td>
                  <td className="p-2">{appointment.time}</td>
                  <td className="p-2">{getDoctorName(appointment.doctorId)}</td>
                  <td className="p-2 flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingAppointment(appointment)}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Appointment</DialogTitle>
                        </DialogHeader>
                        {editingAppointment && (
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-name" className="text-right">
                                Name
                              </Label>
                              <Input
                                id="edit-name"
                                name="patientName"
                                value={editingAppointment.patientName}
                                onChange={(e) => handleInputChange(e, true)}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-date" className="text-right">
                                Date
                              </Label>
                              <Input
                                id="edit-date"
                                name="date"
                                type="date"
                                value={editingAppointment.date}
                                onChange={(e) => handleInputChange(e, true)}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-time" className="text-right">
                                Time
                              </Label>
                              <Input
                                id="edit-time"
                                name="time"
                                type="time"
                                value={editingAppointment.time}
                                onChange={(e) => handleInputChange(e, true)}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label
                                htmlFor="edit-doctor"
                                className="text-right"
                              >
                                Doctor
                              </Label>
                              <Select
                                onValueChange={(value) =>
                                  handleDoctorChange(value, true)
                                }
                                value={editingAppointment.doctorId.toString()}
                              >
                                <SelectTrigger className="col-span-3">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {doctors.map((doctor) => (
                                    <SelectItem
                                      key={doctor.id}
                                      value={doctor.id.toString()}
                                    >
                                      {doctor.name} - {doctor.specialty}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        )}
                        <Button onClick={handleUpdateAppointment}>
                          Update Appointment
                        </Button>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant={
                        appointment.reminderSent ? "secondary" : "default"
                      }
                      size="sm"
                      onClick={() => handleSendReminder(appointment.id)}
                      disabled={appointment.reminderSent}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {appointment.reminderSent ? "Reminded" : "Remind Me"}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteAppointment(appointment.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-4 text-gray-500">
            You have no upcoming appointments.
          </p>
        )}
      </div>
    </section>
  );
};

export default HealthcareAppointmentScheduler;
