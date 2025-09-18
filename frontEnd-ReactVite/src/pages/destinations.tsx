import japan from "../assets/japan.jpg";
import italy from "../assets/italy.jpg";
import greece from "../assets/greece.jpg";
import brazil from "../assets/brazil.jpg";
import iceland from "../assets/iceland.jpg";
import maldives from "../assets/maldives.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const destinations = [
  { img: japan, title: "Japan", description: "Explore the cherry blossoms and ancient temples.", route: "/japan" },
  { img: italy, title: "Italy", description: "Experience rich culture, cuisine, and historic cities.", route: "/italy" },
  { img: greece, title: "Greece", description: "Relax on pristine beaches and stunning islands.", route: "/greece" },
  { img: brazil, title: "Brazil", description: "Discover vibrant cities and Amazonian adventures.", route: "/brazil" },
  { img: iceland, title: "Iceland", description: "Witness glaciers, waterfalls, and northern lights.", route: "/iceland" },
  { img: maldives, title: "Maldives", description: "Indulge in luxury resorts over turquoise waters.", route: "/maldives" },
];

const Destinations = () => {
  const navigate = useNavigate();
  return (
    <section
      id="destinations"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Explore Our <span className="text-yellow-400">Exclusive Destinations</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover unique and luxurious travel experiences across the globe.
          Each destination offers a blend of adventure, relaxation, and cultural immersion.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest, idx) => (
          <motion.div
            key={idx}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => navigate(dest.route)}
          >
            {/* Image */}
            <img
              src={dest.img}
              alt={dest.title}
              className="h-72 w-full object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* Overlay (hover only) */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{dest.title}</h3>
              <p className="text-gray-200">{dest.description}</p>
            </div>

            {/* Always visible country name (hidden on hover) */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="text-base md:text-lg font-medium text-yellow-400 text-center">
                {dest.title}
              </h3>
            </div>
          </motion.div>



        ))}
      </div>
    </section>
  );
};

export default Destinations;
