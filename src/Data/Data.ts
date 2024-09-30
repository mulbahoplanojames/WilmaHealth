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

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  image: string;
}

const doctors: Doctor[] = [
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
