import Brands from "@/components/Brands";
import HomeHero from "@/components/HomeHero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/WhyChooseUs";

const HomePage = () => (
  <>
    <div className="md:container md:mx-auto md:p-4">
      <HomeHero />
      <Services />
      <WhyChooseUs />
      <Testimonial />
      <Brands />
    </div>
  </>
);

export default HomePage;
