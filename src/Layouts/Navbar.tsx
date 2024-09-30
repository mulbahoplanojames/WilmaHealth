import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { navLinks } from "@/Data/Data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between items-center py-6 md:px-16 px-3 fixed top-0 w-full transition-colors duration-300 ${
          isScrolled ? "bg-[#f8a480] text-white" : "bg-transparent shadow-lg"
        } z-40`}
      >
        <h1 className="text-3xl font-semibold">
          Wilma<span>Health</span>
        </h1>

        <menu className="hidden lg:flex">
          <li>
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="inline-block text-md px-8"
              >
                {link.title}
              </Link>
            ))}
          </li>
        </menu>
        <div className="flex items-center gap-4 justify-center">
          <ModeToggle />
          <Sheet>
            <SheetTrigger>
              <Menu className="lg:hidden" />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle className="text-3xl pb-5">WilmaHealth</SheetTitle>
                <SheetDescription>
                  <menu>
                    <li>
                      {navLinks.map((link) => (
                        <Link
                          key={link.title}
                          to={link.path}
                          className="block text-md py-3 text-xl hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </li>
                  </menu>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
