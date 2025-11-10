import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [
    {
      image: "https://i.ibb.co/Xx4FjGFg/piermario-eva-v-Bu7v-A1-Xym-M-unsplash.jpg",
      heading: "Discover Local Food Treasures",
      text: "Find the best local foods recommended by real food lovers!",
      button: "Explore Now",
    },
    {
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
      heading: "Share Your Food Experience",
      text: "Review your favorite food spots and help others choose!",
      button: "Share Review",
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      heading: "Find Hidden Food Gems",
      text: "Discover underrated food spots around your city!",
      button: "Explore Hidden Gems",
    },
  ];

  return (
    <section className="relative w-full perspective-1000 overflow-hidden">
      <Swiper
        loop
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[600px] md:h-[700px]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-full bg-cover bg-center flex items-center justify-start transform-style-preserve-3d"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: "translateZ(-200px) scale(1.2)",
              }}
            >
              {/* 3D Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent backdrop-blur-[1px]"></div>

              {/* Floating Content Layer */}
              <div
                className="relative z-10 text-white px-6 md:px-20 max-w-2xl"
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-2xl animate-float">
                  {slide.heading}
                </h1>
                <p className="text-base md:text-lg mb-6 opacity-90 drop-shadow-lg animate-fadeIn">
                  {slide.text}
                </p>
                <button className="relative bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl hover:bg-green-700 transition-all duration-300 group overflow-hidden">
                  <span className="relative z-10">{slide.button}</span>
                  <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="text-white text-sm font-medium animate-bounce">
          Scroll Down
        </div>
        <div className="w-[2px] h-8 bg-white rounded-full animate-scrollLine"></div>
      </div>

      {/* Animations */}
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0) translateZ(50px); }
            50% { transform: translateY(-10px) translateZ(50px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.2s ease-in-out;
          }

          @keyframes scrollLine {
            0% { transform: scaleY(0); opacity: 0.4; }
            50% { transform: scaleY(1); opacity: 1; }
            100% { transform: scaleY(0); opacity: 0.4; }
          }
          .animate-scrollLine {
            animation: scrollLine 2s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
