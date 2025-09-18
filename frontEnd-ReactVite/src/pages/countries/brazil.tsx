import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import brazil1 from "../../assets/brazil1.jpg";
import brazil2 from "../../assets/brazil2.jpg";
import brazil3 from "../../assets/brazil3.jpg";
import brazil4 from "../../assets/brazil4.jpg";
import { useEffect } from "react";

const Brazil = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  const images = [brazil1, brazil2, brazil3, brazil4];

  const handleBook = () => {
    navigate("/");
    setTimeout(() => {
      const contactForm = document.getElementById("contact");
      if (contactForm) contactForm.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // ✅ Correct responsive slider settings
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
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768, // mobiles
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
        Discover Brazil
      </motion.h1>

      {/* Slider */}
      <div className="w-full max-w-6xl mb-8 md:mb-10">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2 sm:px-4 flex justify-center">
              <img
                src={img}
                alt={`Brazil ${index + 1}`}
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
          Brazil is a vibrant land full of color, rhythm, and natural wonders.
          From the golden beaches of Copacabana to the lively streets of Rio de
          Janeiro, Brazil offers an unforgettable cultural experience. Explore
          the rich traditions of Carnival, the passion for football, and the
          warmth of its people.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Discover the breathtaking beauty of the Amazon rainforest, relax by
          the majestic Iguazu Falls, or dance to the lively beats of samba and
          bossa nova. Whether you seek adventure, relaxation, or cultural
          immersion, Brazil has something for every traveler.
        </p>
      </motion.div>

      {/* Book Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBook}
        className="mt-8 md:mt-10 bg-yellow-400 text-black font-bold px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
      >
        Start Brazil Journey
      </motion.button>
    </section>
  );
};

export default Brazil;
