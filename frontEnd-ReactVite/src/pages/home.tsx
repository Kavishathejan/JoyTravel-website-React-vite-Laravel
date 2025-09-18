// src/pages/home.tsx
import { motion } from "framer-motion"; // for animations
import travelVideo from "../assets/travel.mp4"; // replace with your own video OR keep your image

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background video (falls back to black overlay if not supported) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={travelVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black"></div>

      {/* Content */}
      <motion.div
        className="relative text-center text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide">
          Discover the World with <span className="text-yellow-400">JoyTravel</span>
        </h1>
        <p className="text-sm md:text-xl mb-8 text-gray-200">
          Discover stunning destinations and unforgettable experiences around the world. Start your journey today with exclusive deals and personalized travel plans
        </p>
        <motion.a
          href="#destinations"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full font-medium bg-yellow-400 text-black shadow-lg hover:bg-yellow-500 transition"
        >
          Start The Journey
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
