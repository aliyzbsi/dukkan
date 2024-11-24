import { useState, useEffect } from "react";
import { Search, User } from "lucide-react";
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import DesktopHeader from "@/components/custom/DesktopHeader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
        <div className="flex justify-between  p-8">
          <div>
            <h1 className="text-2xl">Dükkan</h1>
          </div>
          <div className="flex gap-6 ">
            <Button variant="ghost" size="icon" aria-label="User account">
              <User size={20} color="#3b6af5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5 " color="#3b6af5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping basket">
              <SlBasket size={20} color="#3b6af5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu color="#3b6af5" size={20} />
            </Button>
          </div>
        </div>
      ) : (
        <DesktopHeader
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      )}

      {menuOpen && windowWidth <= 720 && (
        <nav className="top-full left-0 w-full bg-white shadow-lg z-10">
          <div className="flex flex-col items-center gap-8 py-6">
            <Link to="/" className="mobile-menu">
              Home
            </Link>

            <Link to="/product" className="mobile-menu">
              Product
            </Link>

            <Link to="/pricing" className="mobile-menu">
              Pricing
            </Link>

            <Link to="/contact" className="mobile-menu">
              Contact
            </Link>
          </div>
        </nav>
      )}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b p-4 z-50">
          <div className="container mx-auto">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-md"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
