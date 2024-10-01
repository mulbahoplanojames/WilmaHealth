import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import img_1 from "/src/assets/heroimage.png";
import img_2 from "/src/assets/heroimage.png";
import img_3 from "/src/assets/doctor.png";

const HomeHero = () => {
  return (
    <>
      <section className="md:px-12 px-4 md:py-10 py-8 h-fit bg-gradient-to-t from-[#fbe7aa] via-[#f8a480] to-[#f8a480] rounded-md grid md:grid-cols-2 grid-cols-1 gap-8 gap-y-12 place-items-center md:mt-[6rem] mt-[6rem]">
        <div className="">
          <h1 className="text-4xl font-bold mb-6">
            Book your Doctor Appointment with WilmaHealth
          </h1>
          <p className="text-xl mb-6">
            Your reliable partner dedicated to supporting your health and
            wellness journey, providing personalized care and guidance for a
            healthier, more balanced life.
          </p>
          <div className="mt-8 md:space-x-4 space-x-1 flex flex-wrap gap-y-2">
            <Link to="/appointment">
              <Button size="lg" variant={"default"}>
                Book an Appointment
              </Button>
            </Link>
            <Link to="/doctors">
              <Button size="lg" variant={"secondary"}>
                View Our Doctors
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:h-[25rem] h-[16rem] relative md:order-last order-first">
          <img
            src={img_1}
            alt="Doctor Image"
            className="w-full h-full md:object-scale object-contain z-10"
          />
          <img
            src={img_2}
            alt="Doctor Image"
            className="w-44 md:h-56 md:w-56 h-44 md:object-scale object-contain absolute top-0 md:right-4 -right-8"
          />
          <img
            src={img_3}
            alt="Doctor Image"
            className="w-44 md:h-56 md:w-56 h-44 md:object-scale object-contain absolute top-0 md:left-0 -left-8"
          />
        </div>
      </section>
    </>
  );
};

export default HomeHero;
