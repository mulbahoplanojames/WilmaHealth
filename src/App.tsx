import { Route, Routes } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import HomePage from "./Pages/Home";
import HealthcareAppointmentScheduler from "./Pages/Appointment";
import DoctorDirectory from "./Pages/Doctors";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/appointment"
          element={<HealthcareAppointmentScheduler />}
        />
        <Route path="/doctors" element={<DoctorDirectory />} />
      </Routes>
    </>
  );
};

export default App;
