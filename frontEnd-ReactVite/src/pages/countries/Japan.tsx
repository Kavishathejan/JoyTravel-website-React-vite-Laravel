import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import japan1 from "../../assets/japan1.jpg";
import japan2 from "../../assets/japan2.jpg";
import japan3 from "../../assets/japan3.jpg";
import japan4 from "../../assets/japan4.jpg";
import { useEffect } from "react";

const Japan = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  const images = [japan1, japan2, japan3, japan4];

  const handleBook = () => {
    navigate("/");
    setTimeout(() => {
      const contactForm = document.getElementById("contact");
      if (contactForm) contactForm.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // ✅ Correct responsive slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablets & small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-start pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-400 mb-8 md:mb-12 text-center"
      >
        Discover Japan
      </motion.h1>

      {/* Slider */}
      <div className="w-full max-w-6xl mb-8 md:mb-10">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2 sm:px-4 flex justify-center">
              <img
                src={img}
                alt={`Japan ${index + 1}`}
                className="h-48 sm:h-64 md:h-80 lg:h-96 w-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-3xl text-center md:text-left space-y-4 px-2 sm:px-4"
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Japan is a land where ancient traditions seamlessly blend with
          cutting-edge technology. From serene temples and cherry blossoms to
          the vibrant streets of Tokyo, Japan offers a unique cultural
          experience like no other.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Explore the iconic Mount Fuji, enjoy world-class sushi, or relax in
          traditional hot springs. Whether you seek adventure or peace, Japan
          has something for everyone.
        </p>
      </motion.div>

      {/* Book Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBook}
        className="mt-8 md:mt-10 bg-yellow-400 text-black font-bold px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
      >
        Start Japan Journey
      </motion.button>
    </section>
  );
};

export default Japan;
