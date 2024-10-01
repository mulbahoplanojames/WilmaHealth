import HomeHero from "@/components/HomeHero";
import Services from "@/components/Services";
import WhyChooseUs from "@/WhyChooseUs";

const HomePage = () => (
  <>
    <div className="md:container md:mx-auto md:p-4">
      <HomeHero />
      <Services />
      <WhyChooseUs />
    </div>
  </>
);

export default HomePage;
