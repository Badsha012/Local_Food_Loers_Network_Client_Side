import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co/Xx4FjGFg/piermario-eva-v-Bu7v-A1-Xym-M-unsplash.jpg",
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
      image:
        "https://i.ibb.co/ZzrsRCHL/ph-m-tr-n-hoan-th-nh-s04l-No-TYQf-A-unsplash.jpg",
      heading: "Taste Authentic Local Street Foods",
      text: "Explore street food spots loved by locals!",
      button: "Find Street Food",
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      heading: "Find Hidden Food Gems",
      text: "Discover underrated food spots around your city!",
      button: "Explore Hidden Gems",
    },
    {
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759",
      heading: "Food Lovers Community",
      text: "Join the community & connect with real foodies!",
      button: "Join Now",
    },
    {
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      heading: "Review & Earn Badges",
      text: "Share reviews and earn foodie badges & recognition!",
      button: "Start Reviewing",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        loop
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[600px] md:h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center flex items-center justify-start"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 text-white px-6 md:px-20 max-w-2xl animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl">
                  {slide.heading}
                </h1>
                <p className="text-base md:text-lg mb-6 opacity-90 drop-shadow-md">
                  {slide.text}
                </p>

                <button className="bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Simple animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
