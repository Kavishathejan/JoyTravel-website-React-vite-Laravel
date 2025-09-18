import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import greece1 from "../../assets/greece1.jpg";
import greece2 from "../../assets/greece2.jpg";
import greece3 from "../../assets/greece3.jpg";
import greece4 from "../../assets/greece4.jpg";
import { useEffect } from "react";

const Greece = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  const images =
   [greece1,
    greece2, 
    greece3, 
    greece4];

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
    centerPadding: "40px", // spacing around center image
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
    ],
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
        Discover Greece
      </motion.h1>

      {/* Coverflow Slider */}
      <div className="w-full max-w-6xl mb-10">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-4 flex justify-center">
              <img
                src={img}
                alt={`Japan ${index + 1}`}
                className="h-64 md:h-96 w-auto object-cover rounded-2xl shadow-2xl transition-transform duration-500"
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
        className="max-w-3xl text-center space-y-4"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Greece is a land of stunning landscapes, ancient history, and sun-kissed islands. From the iconic white-washed buildings of Santorini to the historic ruins of Athens, Greece offers travelers a perfect mix of culture, beauty, and relaxation. Wander through charming villages, enjoy fresh Mediterranean cuisine, and soak in the vibrant local traditions.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Explore the crystal-clear waters of the Aegean Sea, relax on golden beaches, or hike scenic trails overlooking breathtaking vistas. Whether you seek adventure, history, or pure leisure, Greece promises an unforgettable experience for every traveler.
        </p>
      </motion.div>

      {/* Book Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBook}
        className="mt-10 bg-yellow-400 text-black font-bold px-8 py-3 md:px-10 md:py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
      >
        Start Greece Journey
      </motion.button>
    </section>
  );
};

export default Greece;
