import { useState } from "react";
import { Search, ShoppingCart, Heart, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DesktopHeader({ isSearchOpen, setIsSearchOpen }) {
  return (
    <header>
      <div className=" mx-auto px-8 py-10 h-16 flex items-center justify-around">
        <Link to="/" className="text-xl font-semibold">
          Dükkan
        </Link>

        <NavigationMenu className="flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="px-3 py-2 text-sm">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-3 py-2 text-sm">
                Shop
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/categories"
                        className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                      >
                        All Categories
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/categories"
                        className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                      >
                        Kadın Giyim
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/new-arrivals"
                        className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                      >
                        New Arrivals
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="px-3 py-2 text-sm hidden md:flex">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" className="px-3 py-2 text-sm hidden md:flex">
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  className="px-3 py-2 text-sm hidden lg:flex"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/pages" className="px-3 py-2 text-sm hidden md:flex">
                  Pages
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-8 text-blue-500 hover:text-blue-600">
          <div className="flex gap-1">
            <Link to="/login" className="text-sm flex items-center gap-2">
              <span>
                <User size={20} />
              </span>
              Login
            </Link>
            <span className="text-sm ">/</span>
            <Link to="/register" className="text-sm ">
              Register
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5 " />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-[10px] font-medium text-white flex items-center justify-center">
              1
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5 hover:text-red-600" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-[10px] font-medium text-white flex items-center justify-center">
              1
            </span>
          </Button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b p-4">
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
