import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const AppointmentHero = () => {
  return (
    <>
      <section className="mt-[8rem] mb-16">
        <div className="">
          <h2 className="md:text-5xl text-3xl font-semibold md:pb-8 pb-6">
            New Appointment
          </h2>
          <p className="text-xl mb-6 lg:pr-[30rem] md:pr-0">
            schedule a visit with your healthcare provider to discuss any
            medical concerns, receive check-ups, or follow up on ongoing
            treatments. Please provide the necessary details such as your
            preferred date and time, the purpose of the visit, and any specific
            requirements you may have.
          </p>
          <div className="mt-8 md:space-x-4 space-x-2">
            <Link to="/doctors">
              <Button size="lg" variant={"default"}>
                View Our Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentHero;
