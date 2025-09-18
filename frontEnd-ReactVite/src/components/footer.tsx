// src/components/Footer.tsx
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black  to-black text-gray-300 py-12 px-6 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand section */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img src={logo} alt="JoyTravel Logo" className="h-10 w-auto" />
              <h2 className="text-2xl font-bold text-white">JoyTravel</h2>
            </div>
            <p className="text-sm text-gray-300">
              Discover your dream destinations with <span className="text-yellow-400">JoyTravel</span>.
              Your journey begins here.
            </p>
          </div>

          {/* Quick links */}
          {/* Quick links */}
<div className="justify-center text-center">
  <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
  <ul className="space-y-2">
    <li>
      <button
        onClick={() => scrollToSection("home")}
        className="hover:text-yellow-400 transition"
      >
        Home
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection("destinations")}
        className="hover:text-yellow-400 transition"
      >
        Destinations
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection("about")}
        className="hover:text-yellow-400 transition"
      >
        About Us
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection("contact")}
        className="hover:text-yellow-400 transition"
      >
        Contact
      </button>
    </li>
  </ul>
</div>


          {/* Contact & social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center ">Contact</h3>
            <p className="text-sm text-center">
              Email:{" "}
              <a
                href="mailto:contact@joytravel.com"
                className="hover:text-yellow-400"
              >
                contact@joytravel.com
              </a>
            </p>
            <p className="text-sm text-center">
              Phone:{" "}
              <a href="tel:+15551234567" className="hover:text-yellow-400">
                011 555 2 555
              </a>
            </p>

            {/* Social icons */}
            <div className="flex justify-center md:justify-center gap-4 mt-4 item-center justify-center">
              <a
                href="#"
                className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF className="text-white text-lg items-center" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-pink-500 transition"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-sky-400 transition"
              >
                <FaTwitter className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-10 mt-10 text-center">
        © {new Date().getFullYear()} <span className="text-yellow-400">JoyTravel</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
