import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import iceland1 from "../../assets/iceland1.jpg";
import iceland2 from "../../assets/iceland2.jpg";
import iceland3 from "../../assets/iceland3.jpg";
import iceland4 from "../../assets/iceland4.jpg";
import { useEffect } from "react";

const Iceland = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  const images =
   [iceland1,
    iceland2, 
    iceland3, 
    iceland4];

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
        Discover Iceland
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
          Iceland is a land of dramatic landscapes, where glaciers, volcanoes, and waterfalls create a breathtaking natural canvas. From the capital city of Reykjavik to the remote highlands, Iceland offers a unique blend of adventure and tranquility. Explore geothermal hot springs, black sand beaches, and majestic fjords that make every visit unforgettable.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Witness the mesmerizing Northern Lights, hike across glaciers, or relax in soothing natural hot pools. Whether you seek thrilling outdoor adventures or peaceful escapes into nature, Iceland has something extraordinary for every traveler.
        </p>
      </motion.div>

      {/* Book Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBook}
        className="mt-10 bg-yellow-400 text-black font-bold px-8 py-3 md:px-10 md:py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
      >
        Start Iceland Journey
      </motion.button>
    </section>
  );
};

export default Iceland;
