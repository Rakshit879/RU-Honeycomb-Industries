import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Container from "@/components/common/Container";

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white lg:block">
      <Container>
        <div className="flex h-11 items-center justify-between">

          {/* Left Side */}
          <div className="flex items-center gap-8 text-sm">

            <div
              // href="tel:+918791269049"
              className="flex items-center gap-2 transition hover:text-blue-400"
            >
              <Phone size={15} className="text-blue-400" />
              <span>+91 87912 69049, +91 79005 47692</span>
            </div>

            <a
              href="mailto:ruhoneycombindustries@gmail.com"
              className="flex items-center gap-2 transition hover:text-blue-400"
            >
              <Mail size={15} className="text-blue-400" />
              <span>ruhoneycombindustries@gmail.com</span>
            </a>

            <div className="flex items-center gap-2 text-slate-300">
              <MapPin size={15} className="text-blue-400" />
              <span>Hapur, Uttar Pradesh</span>
            </div>

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <Link
              href="#"
              className="rounded-full border border-white/20 p-2 transition hover:bg-blue-600"
            >
              <FaLinkedinIn size={14} />
            </Link>

            <Link
              href="https://wa.me/918791269049"
              target="_blank"
              className="rounded-full border border-white/20 p-2 transition hover:bg-green-500"
            >
              <FaWhatsapp size={14} />
            </Link>

          </div>
        </div>
      </Container>
    </div>
  );
}