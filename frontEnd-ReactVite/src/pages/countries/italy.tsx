import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import italy1 from "../../assets/italy1.jpg";
import italy2 from "../../assets/italy2.jpg";
import italy3 from "../../assets/italy3.jpg";
import italy4 from "../../assets/italy4.jpg";
import { useEffect } from "react";

const Italy = () => {
    useEffect(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, []);
  const navigate = useNavigate();
  const images =
   [italy1,
    italy2, 
    italy3, 
    italy4];

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
        Discover Italy
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
          Italy is a country where history, art, and culture come alive. From the ancient ruins of Rome to the romantic canals of Venice, Italy offers a journey through time and beauty. Savor world-renowned cuisine, wander through charming piazzas, and admire masterpieces of Renaissance art.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Explore the rolling hills of Tuscany, relax along the Amalfi Coast, or marvel at the grandeur of Florence and Milan. Whether you seek history, romance, or culinary delights, Italy has something to enchant every traveler.
        </p>
      </motion.div>

      {/* Book Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBook}
        className="mt-10 bg-yellow-400 text-black font-bold px-8 py-3 md:px-10 md:py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
      >
        Start Italy Journey
      </motion.button>
    </section>
  );
};

export default Italy;
