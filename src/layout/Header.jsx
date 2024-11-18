import React, { useState, useEffect } from "react";
import { Search, User } from "lucide-react";
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import DesktopHeader from "@/components/custom/DesktopHeader";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 720) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative">
      {windowWidth <= 720 ? (
        <div className="flex justify-between p-8">
          <div>
            <h1 className="text-3xl">Dükkan</h1>
          </div>
          <div className="flex gap-4">
            <button aria-label="User account">
              <User size={30} />
            </button>
            <button aria-label="Search">
              <Search size={30} />
            </button>
            <button aria-label="Shopping basket">
              <SlBasket size={30} />
            </button>
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <GiHamburgerMenu color="gray" size={30} />
            </button>
          </div>
        </div>
      ) : (
        <DesktopHeader />
      )}

      {menuOpen && windowWidth <= 720 && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-lg z-10">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a href="#home" className="text-gray-800 text-lg hover:underline">
                Home
              </a>
            </li>
            <li>
              <a
                href="#product"
                className="text-gray-800 text-lg hover:underline"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-gray-800 text-lg hover:underline"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 text-lg hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
