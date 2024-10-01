import { HeartPulse, Users } from "lucide-react";
import Img_1 from "/src/assets/whychoose1.jpg";
import Img_2 from "/src/assets/whychoose2.jpg";

const WhyChooseUs = () => {
  return (
    <>
      <section className="md:px-20 px-4 md:pb-16 pt-8 py-8 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 gap-y-8 place-items-center">
        <div className="w-full h-fit py-3 ">
          <h2 className="md:text-4xl text-3xl font-bold pb-5">
            Why Choose Us?
          </h2>
          <p className="text-xl  pb-8">
            We are committed to providing exceptional healthcare services to
            patients of all ages. Our team of experienced doctors and
            specialists are dedicated to delivering quality care at affordable
            prices.
          </p>
          <div className="w-full h-fit  flex  md:gap-8 gap-5  items-start">
            <HeartPulse size={70} />
            <div className="">
              <h2 className=" text-xl font-bold pb-5">
                Quality Control System
              </h2>
              <p className="text-base md:text-lg  pb-8">
                At WilmaHealth, we are committed to delivering exceptional
                healthcare services to patients of all ages.
              </p>
            </div>
          </div>
          <div className="w-full h-fit  flex  md:gap-8 gap-5   items-start mt-3">
            <Users size={70} />
            <div className="">
              <h2 className=" text-xl font-bold pb-5">
                Highly Professional Staff
              </h2>
              <p className="text-base md:text-lg  pb-8">
                We Provide Highly Professional Staff. We are committed to
                delivering exceptional healthcare services to patients of all
                ages.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[500px] py-3  relative">
          <div className="md:w-[350px] w-[300px] h-[270px] rounded-md overflow-hidden bg-green-500 absolute top-4 md:left-5 left-2">
            <img src={Img_1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-[350px] w-[300px] md:h-[250px] h-[230px] rounded-md overflow-hidden bg-green-500 absolute bottom-4 md:right-5 right-2">
            <img src={Img_2} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
