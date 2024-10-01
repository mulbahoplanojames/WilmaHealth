import { CompanyData, UseFulLinks } from "@/Data/Data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-p1 text-white bg-[#f8a480]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-12 xl:col-span-2">
              <div className="md:grid md:grid-cols-3 md:gap-x-16">
                <div className="col-span-2">
                  <h3 className="text-2xl font-semibold text-white tracking-wider uppercase">
                    WilmaHealth
                  </h3>

                  <p className="mt-4 text-base text-white">
                    We are committed to providing exceptional healthcare
                    services to patients of all ages. Our team of experienced
                    doctors and specialists are dedicated to delivering quality
                    care at affordable prices.
                  </p>
                </div>

                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Useful Links
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {UseFulLinks.map((item) => (
                      <li key={item}>
                        <Link
                          to="#"
                          className="text-base text-white hover:text-slate-400"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {CompanyData.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={""}
                          className="text-base text-white hover:text-slate-400"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* made with love  */}
        <a href="https://techspace-one.vercel.app/" target="_blank">
          <div
            className="fixed bottom-10 right-4 p-2 rounded-md bg-white text-base cursor-pointer text-slate-900 border-2 border-[#f8a480] hover:bg-[#f8a480] hover:text-white transition-all"
            title="Visit our website"
          >
            made ❤️<span className="text-blue-800"> Techspace</span>
            <p>Build your website today</p>
          </div>
        </a>
      </footer>
    </>
  );
};

export default Footer;
