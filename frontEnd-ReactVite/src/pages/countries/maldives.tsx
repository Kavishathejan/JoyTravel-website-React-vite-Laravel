import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import maldives1 from "../../assets/maldives1.jpg";
import maldives2 from "../../assets/maldives2.jpg";
import maldives3 from "../../assets/maldives3.jpg";
import maldives4 from "../../assets/maldives4.jpg";
import { useEffect } from "react";

const Maldives = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  const images =
   [maldives1,
    maldives2, 
    maldives3, 
    maldives4];

  const handleBook = () => {
    
    navigate("/");
    setTimeout(() => {
      const contactForm = document.getElementById("contact");
      if (contactForm) contactForm.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-start pt-32 px-6 overflow-hidden">
      
      {/* Header */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-serif font-bold text-yellow-400 mb-12 text-center"
      >
        Discover Maldives
      </motion.h1>

      {/* Desktop Slider */}
      <div className="hidden lg:block w-full max-w-6xl mb-8 md:mb-10">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2 sm:px-4 flex justify-center">
              <img
                src={img}
                alt={`Japan ${index + 1}`}
                className="h-96 w-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Tablet & Mobile 4-photo grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl mb-8 md:mb-10 lg:hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Japan ${index + 1}`}
            className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-2xl"
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-3xl text-center space-y-4"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          The Maldives is a tropical paradise of crystal-clear waters, white sandy beaches, and luxurious overwater villas. From vibrant coral reefs to serene lagoons, it offers an idyllic escape for those seeking relaxation and natural beauty. Immerse yourself in the tranquil surroundings and enjoy world-class hospitality in this island haven.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Snorkel or dive among colorful marine life, unwind under swaying palm trees, or take a sunset cruise across the turquoise waters. Whether you seek romance, adventure, or pure serenity, the Maldives promises an unforgettable and rejuvenating experience.
        </p>
      </motion.div>

      {/* Book Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBook}
        className="mt-10 bg-yellow-400 text-black font-bold px-8 py-3 md:px-10 md:py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
      >
        Start Maldives Journey
      </motion.button>
    </section>
  );
};

export default Maldives;
