import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function DesktopHeader() {
  return (
    <div className="w-full  bg-slate-900 text-white px-4 py-4">
      <div className=" mx-auto flex flex-wrap justify-between w-full  text-sm">
        <div className="flex items-center space-x-4 flex-wrap">
          <Link
            href="tel:(225) 555-0118"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <Phone className="h-4 w-4" />
            <span>(225) 555-0118</span>
          </Link>
          <Link
            href="mailto:michelle.rivera@example.com"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <Mail className="h-4 w-4" />
            <span>michelle.rivera@example.com</span>
          </Link>
        </div>

        {/* Promotional Text */}
        <div className="hidden md:block text-center">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4">
          <span>Follow Us:</span>
          <div className="flex gap-3">
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Follow us on YouTube"
            >
              <Youtube className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
