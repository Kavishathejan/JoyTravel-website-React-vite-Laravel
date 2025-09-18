// src/components/Testimonials.tsx
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonials = [
    {
      name: "Sophia Williams",
      text: "Our Maldives trip was magical! The service and attention to detail were outstanding.",
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "James Anderson",
      text: "Truly luxury travel — from booking to arrival, everything was seamless.",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Olivia Brown",
      text: "Best holiday ever! Private tours, luxury hotels, and unforgettable memories.",
      image: "https://i.pravatar.cc/150?img=22",
    },
    {
      name: "Ethan Smith",
      text: "They planned every detail perfectly. Highly recommend for stress-free luxury travel.",
      image: "https://i.pravatar.cc/150?img=34",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <h3 className="text-3xl font-bold text-center mb-12">
        What Our Clients Say
      </h3>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="px-2 sm:px-4">
            <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl 
                      hover:scale-105 transform transition duration-300 
                      h-full flex flex-col justify-between">
              {/* Client Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full 
                       border-4 border-gray-700 shadow-md"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 italic mb-4 text-center text-sm sm:text-base">
                "{t.text}"
              </p>

              {/* Stars */}
              <div className="flex justify-center text-yellow-400 mb-3 text-sm sm:text-base">
                ★★★★★
              </div>

              {/* Name */}
              <h4 className="text-md sm:text-lg font-semibold text-center">
                {t.name}
              </h4>
            </div>
          </div>
        ))}
      </Slider>

    </section>
  );
};

export default Testimonials;
