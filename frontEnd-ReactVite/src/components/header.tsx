import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      // Section exists on this page
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      // Section does not exist → go to home page first
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200); // small delay to allow home page to render
    }
  };


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 border-b border-white/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Ceylon Travelex" className="h-10 md:h-12 cursor-pointer" onClick={() => scrollToSection("home")} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center text-white font-medium">
          <button onClick={() => scrollToSection("home")} className="hover:text-yellow-400 transition">Home</button>
          <button onClick={() => scrollToSection("destinations")} className="hover:text-yellow-400 transition">Destinations</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-yellow-400 transition">About Us</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-yellow-400 transition">Contact</button>

          <button onClick={() => scrollToSection("contact")} className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition">
            Book Now
          </button>

          {/* Login / User */}
          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="border border-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400">Hello, {user.name}</span>

              {user.role === 1 && (
                <button
                  onClick={() => navigate("/admin/dashboard")}
                  className="border border-yellow-400 px-4 py-2 rounded-lg font-medium text-yellow-400 hover:bg-yellow-500 hover:text-white transition"
                >
                  Admin Dashboard
                </button>
              )}

              <button
                onClick={handleLogout}
                className="border border-red-400 px-4 py-2 rounded-lg font-medium text-red-400 hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white font-bold">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white">
          <nav className="flex flex-col space-y-4 p-4 text-center">
            <button
              onClick={() => { scrollToSection("home"); setIsOpen(false); }}
              className="hover:text-yellow-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => { scrollToSection("destinations"); setIsOpen(false); }}
              className="hover:text-yellow-400 transition"
            >
              Destinations
            </button>
            <button
              onClick={() => { scrollToSection("about"); setIsOpen(false); }}
              className="hover:text-yellow-400 transition"
            >
              About Us
            </button>
            <button
              onClick={() => { scrollToSection("contact"); setIsOpen(false); }}
              className="hover:text-yellow-400 transition"
            >
              Contact
            </button>

            <button
              onClick={() => { scrollToSection("contact"); setIsOpen(false); }}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
            >
              Book Now
            </button>

            {!user ? (
              <button
                onClick={() => { navigate("/login"); setIsOpen(false); }}
                className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition"
              >
                Login
              </button>
            ) : (
              <div className="flex flex-col space-y-2 items-center">
                <span className="text-yellow-400">Hello, {user.name}</span>

                {user.role === 1 && (
                  <button
                    onClick={() => { navigate("/admin/dashboard"); setIsOpen(false); }}
                    className="border border-yellow-400 px-6 py-2 rounded-lg font-medium text-yellow-400 hover:bg-yellow-500 hover:text-white transition"
                  >
                    Admin Dashboard
                  </button>
                )}

                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="border border-red-400 px-6 py-2 rounded-lg font-medium text-red-400 hover:bg-red-500 hover:text-white transition"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;
