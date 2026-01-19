"use client";
import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo_white.png";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1b3232] text-background py-8 sm:py-16 relative sm:px-18">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src={logo}
              height={150}
              width={150}
              alt="logo"
              className="-ms-10"
            />
            <p className="text-gray-300 text-sm mb-4">
              Shakti ki Disha — Discover Your True Potential through
              scientifically validated assessments.
            </p>
            <p className="text-gray-400 text-xs">
              Because your potential deserves data — not guesswork.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "How It Works", "Benefits", "FAQ"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-400 hover:text-warning transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* For You */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-200">
              For You
            </h4>
            <ul className="space-y-2">
              {[
                "Entrepreneurs",
                "Students",
                "Parents",
                "Professionals",
                "Corporates",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#who-its-for"
                    className="text-gray-400 hover:text-warning transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-200">Legal</h4>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Data Protection",
                "Cookie Policy",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-warning transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} DAKSH. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-warning text-black flex items-center justify-center hover:shadow-glow transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
