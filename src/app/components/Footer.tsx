import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "../../assets/logo1.png";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-[#0f1f3d] via-[#1a3a52] to-[#2a4a62] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Master Stroke Paintworks"
              className="w-48 mb-6"
            />
            <p className="text-gray-300 leading-relaxed">
              Transforming spaces with perfection. Premium painting services for homes and offices in Bengaluru.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["about", "services", "pricing", "gallery", "contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6 text-[#D4AF37]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <a href="tel:9741193344" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  9741193344
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  info@masterstroke.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  159/8, JP Nagar 9th Phase,<br />
                  Bengaluru
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl mb-6 text-[#D4AF37]">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/masterstrokepaintworks9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Instagram</p>
              <p className="text-gray-300">@masterstrokepaintworks9</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Master Stroke Paintworks. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Designed with ❤️ for Premium Painting Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
