import { BrandLogo } from "@/Data/Data";

const Brands = () => {
  return (
    <>
      <section className="md:px-20 px-4 md:py-16 py-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 gap-y-6 bg-[#f8a480] rounded-md">
        {BrandLogo.map((brand) => (
          <div
            className="md:w-[200px] w-full h-[70px] overflow-hidden"
            key={brand.id}
          >
            <img
              src={brand.logo}
              alt={brand.title}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Brands;
