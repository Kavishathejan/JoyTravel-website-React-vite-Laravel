import manImg from "../assets/man.jpg";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={manImg}
        alt="About Us"
        className="absolute w-full h-full object-cover brightness-70 "
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 text-white">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="JoyTravel Logo"
            className="h-24 md:h-32 lg:h-40 mx-auto"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-12 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
            Welcome to <span className="text-yellow-400">JoyTravel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We create unforgettable luxury travel experiences tailored just for you.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 w-full">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform border border-yellow-400/30"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-yellow-400">
              Our Vision
            </h2>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">
              Our vision is to create a world where travel is accessible, inspiring,
              and life-changing for everyone. We aspire to be a trusted companion
              that connects people to new cultures, breathtaking destinations, and
              unforgettable experiences — making every journey not just possible,
              but truly meaningful.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform border border-yellow-400/30"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-yellow-400">
              Our Mission
            </h2>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">
              Our mission is to simplify the way people explore the world by
              offering reliable, affordable, and personalized travel experiences.
              We guide travelers at every step — from planning and booking to
              creating memories. With cultural respect, sustainability, and
              customer satisfaction at heart, we strive to turn travel dreams into reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
